import { Cart } from "@type/Cart";
import { fetchAuth } from "@api/fetchAuth";

export const getCart = async (): Promise<Cart> => {
    const res = await fetchAuth("/user/cart");
    return res as Cart;
};
