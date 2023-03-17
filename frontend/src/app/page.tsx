import { Hero2 } from "@modules/landing/Hero2";
import { Features } from "@modules/landing/Features";
import { NewListings } from "@modules/landing/NewListings";
import { FeatureAbout } from "@modules/landing/FeatureAbout";
import { getNewestProducts } from "@api/products/getNewestProducts";

export default async function Page() {
    const newestProducts = await getNewestProducts();

    return (
        <>
            {/* <Hero /> */}
            <Hero2 />
            <Features />
            <NewListings newestProducts={newestProducts} />
            <FeatureAbout />
        </>
    );
}
