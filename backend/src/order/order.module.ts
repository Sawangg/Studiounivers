import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/user/entities/user.entity";
import { UserModule } from "src/user/user.module";
import { OrderController } from "./controllers/order.controller";
import { Order } from "./entities/order.entity";
import { OrderService } from "./services/order.service";

@Module({
    imports: [TypeOrmModule.forFeature([Order, User]), UserModule],
    controllers: [OrderController],
    providers: [OrderService],
    exports: [OrderService],
})
export class OrderModule { }
