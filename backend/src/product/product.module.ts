import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductController } from "@product/controllers/product.controller";
import { Product } from "@product/entities/product.entity";
import { ProductService } from "@product/services/product.service";
import { MinioModule } from "@minio/minio.module";

@Module({
    imports: [TypeOrmModule.forFeature([Product]), MinioModule],
    controllers: [ProductController],
    providers: [ProductService],
})
export class ProductModule {}
