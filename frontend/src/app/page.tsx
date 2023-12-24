import { getNewestProducts } from "@api/products/getNewestProducts";
import { FeatureAbout } from "@modules/landing/FeatureAbout";
import { Features } from "@modules/landing/Features";
import { Hero } from "@modules/landing/Hero";
import { NewListings } from "@modules/landing/NewListings";

export default async function Page() {
  const newestProducts = await getNewestProducts();

  return (
    <>
      <Hero />
      <Features />
      <NewListings newestProducts={newestProducts!} />
      <FeatureAbout />
    </>
  );
}
