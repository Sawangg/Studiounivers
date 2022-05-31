import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import type { Repository } from "typeorm";
import type { CreateProductDto } from "../dtos/CreateProduct.dto";
import { Product } from "../entities/Product.entity";

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
    ) { }

    create(createProductDto: CreateProductDto) {
        this.productRepository.save(createProductDto);
    }
}
