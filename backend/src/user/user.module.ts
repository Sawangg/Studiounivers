import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "@product/entities/product.entity";
import { UserController } from "@user/controllers/user.controller";
import { Cart } from "@user/entities/cart.entity";
import { User } from "@user/entities/user.entity";
import { UserService } from "@user/services/user.service";

@Module({
    imports: [TypeOrmModule.forFeature([User, Product, Cart])],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService],
})
export class UserModule {}
