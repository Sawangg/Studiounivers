import axios from "axios";
import { apiEndpoint } from "./constants";
import getStripe from "./stripe";

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
