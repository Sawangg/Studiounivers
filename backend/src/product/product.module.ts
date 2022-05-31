import { Module } from "@nestjs/common";
import { ProductService } from "./services/product.service";
import { ProductController } from "./controllers/product.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "./entities/Product.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Product])],
    controllers: [ProductController],
    providers: [ProductService],
})
export class ProductModule { }
