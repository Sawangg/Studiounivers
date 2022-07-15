import { apiEndpoint } from "@lib/constants";
import getStripe from "@lib/stripe";
import axios from "axios";

const checkout = async (amount: number) => {
    try {
        const rep = await axios.post(`${apiEndpoint}/api/payment/session`, { amount }, { withCredentials: true });
        const stripe = await getStripe();
        await stripe!.redirectToCheckout({ sessionId: rep.data.id });
    } catch {
        // Notif error here
    }
};

export default checkout;
