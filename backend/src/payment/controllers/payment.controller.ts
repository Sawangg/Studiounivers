import { Body, Controller, Post, Request as RequestD, UseGuards } from "@nestjs/common";
import type { Request } from "express";
import { JwtAuthGuard } from "src/auth/guards/JWTGuard";
import type { CreatePaymentSessionDto } from "../dtos/CreateSession.dto";
import { PaymentService } from "../services/payment.service";

@Controller("payment")
export class PaymentController {
    constructor(private readonly paymentService: PaymentService) { }

    @UseGuards(JwtAuthGuard)
    @Post("session")
    isLogged(@RequestD() request: Request, @Body() createPaymentSession: CreatePaymentSessionDto) {
        return this.paymentService.createSession(request.headers.origin, createPaymentSession);
    }
}
