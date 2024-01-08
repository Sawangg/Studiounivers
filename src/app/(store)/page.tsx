import { FeatureAbout } from "@components/landing/FeatureAbout";
import { Features } from "@components/landing/Features";
import { Hero } from "@components/landing/Hero";
import { NewListings } from "@components/landing/NewListings";

export default async function Page() {
  return (
    <>
      <Hero />
      <Features />
      {/* <NewListings /> */}
      <FeatureAbout />
    </>
  );
}
