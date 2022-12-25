import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, Like } from "typeorm";
import { MinioService } from "@minio/services/minio.service";
import { Product } from "@product/entities/product.entity";
import type { CreateProductDto } from "@product/dtos/CreateProduct.dto";
import type { UpdateProductDto } from "@product/dtos/UpdateProduct.dto";

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
        private readonly minioService: MinioService,
    ) {}

    async create(createProductDto: CreateProductDto, files: Array<Express.Multer.File>) {
        const filesUploaded: Array<Promise<string>> = [];
        for (const file of files) filesUploaded.push(this.minioService.upload(file));
        createProductDto.photos = await Promise.all(filesUploaded);
        createProductDto.addedAt = new Date(Date.now());
        return this.productRepository.save(createProductDto);
    }

    async update(productId: number, updateProductDto: UpdateProductDto, files?: Array<Express.Multer.File>) {
        const product = await this.productRepository.findOne({ where: { id: productId } });
        if (!product) throw new BadRequestException("No product found");

        if (files && files.length > 0) {
            const filesUploaded: Array<Promise<string>> = [];
            for (const file of files) filesUploaded.push(this.minioService.upload(file));
            updateProductDto.photos = await Promise.all(filesUploaded);
        }

        await this.productRepository
            .createQueryBuilder("product")
            .update()
            .set({
                name: updateProductDto.name,
                description: updateProductDto.description,
                price: updateProductDto.price,
                photos: updateProductDto.photos,
                reference: updateProductDto.reference,
                tags: updateProductDto.tags,
            })
            .where('"product"."id" = :productId', { productId })
            .execute();

        return this.productRepository.findOne({ where: { id: productId } });
    }

    async newest() {
        const result = await this.productRepository
            .createQueryBuilder("product")
            .orderBy("product.addedAt", "DESC")
            .limit(4)
            .getMany();
        return result;
    }

    async popular() {
        const result = await this.productRepository.query(
            `SELECT "product".* FROM "cart" LEFT JOIN "product" ON "product"."id" = "cart"."productId" GROUP BY "product"."id" ORDER BY COUNT("cart"."productId") DESC LIMIT 4`,
        );
        if (result && result.length === 4) return result;
        return this.newest();
    }

    search(query: string) {
        return this.productRepository.findBy({ name: Like(`${query}%`) });
    }

    findAll() {
        return this.productRepository.find({ order: { addedAt: "DESC" } });
    }

    find(id: number) {
        return this.productRepository.findOne({ where: { id } });
    }

    async delete(id: number) {
        const product = await this.find(id);
        for (const photo of product.photos) {
            this.minioService.delete(photo.split("/")[4]);
        }
        return this.productRepository.delete(id);
    }
}
