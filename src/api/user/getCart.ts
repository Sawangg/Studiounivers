import { fetchAuth } from "@api/fetchAuth";
import { Cart } from "@type/Cart";

export const getCart = async (): Promise<Cart | null> => {
  const res = await fetchAuth("/user/cart");
  return res as Cart;
};
