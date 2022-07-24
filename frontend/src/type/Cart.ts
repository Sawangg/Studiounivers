import { Product } from "@type/Product";

export type Cart = {
    total: number;
    productsInCart: Array<{ product: Product; quantity: number; adjustedPrice: number }>;
};
