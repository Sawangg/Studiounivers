import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { OrderService } from "@order/services/order.service";
import { defaultCurrency } from "@utils/constants";
import type { User } from "@user/entities/user.entity";
import type { CreatePaymentSessionDto } from "@payment/dtos/CreateSession.dto";
import type { VerifyPaymentDto } from "@payment/dtos/VerifyPayment.dto";
import Stripe from "stripe";

@Injectable()
export class PaymentService {
    private stripe: Stripe;

    constructor(
        @Inject(OrderService) private readonly orderService: OrderService,
        private readonly configService: ConfigService,
    ) {
        this.stripe = new Stripe(this.configService.get<string>("STRIPE_SECRET_KEY"), { apiVersion: "2022-11-15" });
    }

    async createSession(origin: string, createPaymentSession: CreatePaymentSessionDto) {
        const params: Stripe.Checkout.SessionCreateParams = {
            submit_type: "pay",
            payment_method_types: ["card"],
            line_items: [
                {
                    price_data: { currency: defaultCurrency, unit_amount: createPaymentSession.amount },
                    quantity: 1,
                },
            ],
            success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${origin}/`,
        };

        const checkoutSession: Stripe.Checkout.Session = await this.stripe.checkout.sessions.create(params);
        if (!checkoutSession) throw new BadRequestException();
        return checkoutSession;
    }

    async verifyPayment(user: User, verifyPayment: VerifyPaymentDto) {
        try {
            const session = await this.stripe.checkout.sessions.retrieve(verifyPayment.sessionId);
            const customer = await this.stripe.customers.retrieve(session.customer.toString());
            const alreadyOrdered = await this.orderService.findByStripeSessionId(verifyPayment.sessionId);
            if (alreadyOrdered) return { customer };
            const order = await this.orderService.createOrder(user, verifyPayment.sessionId);
            return { customer, order };
        } catch {
            throw new BadRequestException();
        }
    }
}
