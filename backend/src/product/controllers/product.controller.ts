import { Controller, Post } from "@nestjs/common";
import type { CreateProductDto } from "../dtos/CreateProduct.dto";
import { ProductService } from "../services/product.service";

@Controller("product")
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @Post()
    createProduct(createProductDto: CreateProductDto) {
        this.productService.create(createProductDto);
    }
}
