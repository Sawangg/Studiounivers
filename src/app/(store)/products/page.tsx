import { getAllProducts } from "@api/products/getAllProducts";
import { ProductsGrid } from "@modules/product/ProductsGrid";

export default async function Page() {
  const products = await getAllProducts();

  return <ProductsGrid products={products} />;
}
