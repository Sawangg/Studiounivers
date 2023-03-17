import { apiEndpoint } from "@lib/constants";
import getStripe from "@lib/stripe";

export const checkout = async (amount: number) => {
    try {
        const res = await fetch(`${apiEndpoint}/payment/session`, {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount }),
        });
        const data = await res.json();
        const stripe = await getStripe();
        await stripe!.redirectToCheckout({ sessionId: data.id });
    } catch {
        // Notif error here
    }
};
