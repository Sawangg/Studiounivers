import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import type { Repository } from "typeorm";
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
        return this.productRepository.save(createProductDto);
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
