import { apiEndpoint } from "@lib/constants";
import { Product } from "@type/Product";

export const getProduct = async (id: number) => {
    const res = await fetch(`${apiEndpoint}/api/product/${id}`);
    const data = await res.json();
    return data as Product;
};

export default async function Head({ params }: any) {
    const product = await getProduct(params.slug);

    return <title>{`StudioUnivers — ${product.name}`}</title>;
}
