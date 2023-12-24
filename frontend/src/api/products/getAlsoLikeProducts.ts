import { Product } from "@type/Product";
import { apiEndpoint } from "@lib/constants";

export const getAlsoLikeProducts = async (): Promise<Array<Product> | null> => {
  const res = await fetch(`${apiEndpoint}/product/newest`);
  if (!res.ok) throw new Error("Failed to fetch /product/newest data");
  return res.json();
};
