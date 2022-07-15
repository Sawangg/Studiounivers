import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "@user/entities/user.entity";
import { UserModule } from "@user/user.module";
import { OrderController } from "@order/controllers/order.controller";
import { Order } from "@order/entities/order.entity";
import { OrderService } from "@order/services/order.service";

@Module({
    imports: [TypeOrmModule.forFeature([Order, User]), UserModule],
    controllers: [OrderController],
    providers: [OrderService],
    exports: [OrderService],
})
export class OrderModule {}
