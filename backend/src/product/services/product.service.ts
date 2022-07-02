import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, Like } from "typeorm";
import type { CreateProductDto } from "../dtos/CreateProduct.dto";
import { Product } from "../entities/product.entity";

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
    ) { }

    create(createProductDto: CreateProductDto, files: Array<Express.Multer.File>) {
        const filesData: Array<string> = [];
        files.forEach(file => filesData.push(`data:${file.mimetype};base64,${file.buffer.toString("base64")}`));
        createProductDto.photos = filesData;
        createProductDto.addedAt = new Date(Date.now());
        return this.productRepository.save(createProductDto);
    }

    async newest() {
        const result = await this.productRepository.createQueryBuilder("product")
            .orderBy("product.addedAt", "DESC")
            .limit(4)
            .getMany();
        return result;
    }

    async popular() {
        const result = await this.productRepository.query(`SELECT "product".* FROM "cart" LEFT JOIN "product" ON "product"."id" = "cart"."productId" GROUP BY "product"."id" ORDER BY COUNT("cart"."productId") DESC LIMIT 4`);
        if (result && result.length === 4) return result;
        return this.newest();
    }

    search(query: string) {
        return this.productRepository.findBy({ name: Like(`${query}%`) });
    }

    findAll() {
        return this.productRepository.find();
    }

    find(id: number) {
        return this.productRepository.findOne({ where: { id } });
    }

    delete(id: number) {
        return this.productRepository.delete(id);
    }
}
