import { apiEndpoint } from "@lib/constants";
import { Product } from "@type/Product";

export const getNewestProducts = async (): Promise<Array<Product>> => {
    const res = await fetch(`${apiEndpoint}/product/newest`);
    if (!res.ok) throw new Error(`${res.status}: Failed to fetch /product/newest data`);
    return res.json();
};
