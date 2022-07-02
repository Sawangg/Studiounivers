import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "src/product/entities/product.entity";
import { UserController } from "./controllers/user.controller";
import { Cart } from "./entities/cart.entity";
import { User } from "./entities/user.entity";
import { UserService } from "./services/user.service";

@Module({
    imports: [TypeOrmModule.forFeature([User, Product, Cart])],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService],
})
export class UserModule { }
