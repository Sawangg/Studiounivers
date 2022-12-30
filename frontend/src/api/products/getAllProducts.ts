import { apiEndpoint } from "@lib/constants";
import { Product } from "@type/Product";

export const getAllProducts = async (): Promise<Array<Product> | null> => {
    const res = await fetch(`${apiEndpoint}/product`);
    if (!res.ok) throw new Error("Failed to fetch /product data");
    return res.json();
};
