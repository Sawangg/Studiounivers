import { BadRequestException, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { defaultCurrency } from "src/utils/constants";
import { formatAmountForStripe } from "src/utils/stripe";
import Stripe from "stripe";
import type { CreatePaymentSessionDto } from "../dtos/CreateSession.dto";
import type { VerifyPaymentDto } from "../dtos/VerifyPayment.dto";

@Injectable()
export class PaymentService {
    private stripe: Stripe;

    constructor(private readonly configService: ConfigService) {
        this.stripe = new Stripe(this.configService.get<string>("STRIPE_SECRET_KEY"), { apiVersion: "2020-08-27" });
    }

    async createSession(origin: string, createPaymentSession: CreatePaymentSessionDto) {
        const params: Stripe.Checkout.SessionCreateParams = {
            submit_type: "pay",
            payment_method_types: ["card"],
            line_items: [
                {
                    name: "Régler votre commande",
                    amount: formatAmountForStripe(createPaymentSession.amount, defaultCurrency),
                    currency: defaultCurrency,
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

    async verifyPayment(verifyPayment: VerifyPaymentDto) {
        try {
            const session = await this.stripe.checkout.sessions.retrieve(verifyPayment.sessionId);
            const customer = await this.stripe.customers.retrieve(session.customer.toString());
            return customer;
        } catch {
            return null;
        }
    }
}
