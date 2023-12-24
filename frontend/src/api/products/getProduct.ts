import { Product } from "@type/Product";
import { apiEndpoint } from "@lib/constants";

export const getProduct = async (id: string): Promise<Product | null> => {
  const res = await fetch(`${apiEndpoint}/product/${id}`);
  if (!res.ok) throw new Error("Failed to fetch /product/[id] data");
  return res.json();
};
