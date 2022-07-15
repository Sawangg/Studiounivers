import { Module } from "@nestjs/common";
import { OrderModule } from "@order/order.module";
import { PaymentController } from "@payment/controllers/payment.controller";
import { PaymentService } from "@payment/services/payment.service";

@Module({
    imports: [OrderModule],
    controllers: [PaymentController],
    providers: [PaymentService],
})
export class PaymentModule {}
