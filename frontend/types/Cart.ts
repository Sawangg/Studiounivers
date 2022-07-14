import { Product } from "./Product";

export type Cart = {
    total: number;
    productsInCart: Array<{ product: Product; quantity: number; adjustedPrice: number }>;
};
