import { Body, Controller, Post, Request as RequestD, UseGuards } from "@nestjs/common";
import type { Request } from "express";
import { JwtAuthGuard } from "src/auth/guards/JWTGuard";
import { CreatePaymentSessionDto } from "../dtos/CreateSession.dto";
import { VerifyPaymentDto } from "../dtos/VerifyPayment.dto";
import { PaymentService } from "../services/payment.service";

@Controller("payment")
export class PaymentController {
    constructor(private readonly paymentService: PaymentService) { }

    @UseGuards(JwtAuthGuard)
    @Post("session")
    createSession(@RequestD() request: Request, @Body() createPaymentSession: CreatePaymentSessionDto) {
        return this.paymentService.createSession(request.headers.origin, createPaymentSession);
    }

    @UseGuards(JwtAuthGuard)
    @Post("verify")
    verifyPayment(@Body() verifyPayment: VerifyPaymentDto) {
        return this.paymentService.verifyPayment(verifyPayment);
    }
}
