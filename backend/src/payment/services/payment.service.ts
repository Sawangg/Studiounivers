import { BadRequestException, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import type { CreatePaymentSessionDto } from "../dtos/CreateSession.dto";
import { formatAmountForStripe } from "src/utils/stripe";
import { defaultCurrency } from "src/utils/constants";
import Stripe from "stripe";

@Injectable()
export class PaymentService {
    constructor(private readonly configService: ConfigService) { }

    async createSession(origin: string, createPaymentSession: CreatePaymentSessionDto) {
        const stripe = new Stripe(this.configService.get<string>("STRIPE_SECRET_KEY"), { apiVersion: "2020-08-27" });

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

        const checkoutSession: Stripe.Checkout.Session = await stripe.checkout.sessions.create(params);
        if (!checkoutSession) throw new BadRequestException();
        return checkoutSession;
    }
}
