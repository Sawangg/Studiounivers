import { Module } from "@nestjs/common";
import { OrderModule } from "src/order/order.module";
import { PaymentController } from "./controllers/payment.controller";
import { PaymentService } from "./services/payment.service";

@Module({
    imports: [OrderModule],
    controllers: [PaymentController],
    providers: [PaymentService],
})
export class PaymentModule {}
