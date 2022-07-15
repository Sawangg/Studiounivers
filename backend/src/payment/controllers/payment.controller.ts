import { Body, Controller, Post, Request as RequestD, UseGuards } from "@nestjs/common";
import type { Request } from "express";
import { JwtAuthGuard } from "@auth/guards/JWTGuard";
import type { User } from "@user/entities/user.entity";
import { CreatePaymentSessionDto } from "@payment/dtos/CreateSession.dto";
import { VerifyPaymentDto } from "@payment/dtos/VerifyPayment.dto";
import { PaymentService } from "@payment/services/payment.service";

@Controller("payment")
export class PaymentController {
    constructor(private readonly paymentService: PaymentService) {}

    @UseGuards(JwtAuthGuard)
    @Post("session")
    createSession(@RequestD() req: Request, @Body() createPaymentSession: CreatePaymentSessionDto) {
        return this.paymentService.createSession(req.headers.origin, createPaymentSession);
    }

    @UseGuards(JwtAuthGuard)
    @Post("verify")
    verifyPayment(@RequestD() req: Request, @Body() verifyPayment: VerifyPaymentDto) {
        return this.paymentService.verifyPayment(req.user as User, verifyPayment);
    }
}
