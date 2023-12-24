import { notFound } from "next/navigation";
import { getProduct } from "@api/products/getProduct";

export default async function Head({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);
  if (!product) return notFound();

  return <title>{`StudioUnivers — ${product.name}`}</title>;
}
