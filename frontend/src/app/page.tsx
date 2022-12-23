import { apiEndpoint } from "@lib/constants";
import { Footer } from "@modules/Footer";
import { FeatureAbout } from "@modules/landing/FeatureAbout";
import { Features } from "@modules/landing/Features";
import { Hero } from "@modules/landing/Hero";
import { Hero2 } from "@modules/landing/Hero2";
import { NewListings } from "@modules/landing/NewListings";
import { cookies } from "next/headers";
import { Navbar } from "@modules/Navbar";
import { Product } from "@type/Product";

const getNewestProducts = async () => {
    const rep = await fetch(`${apiEndpoint}/api/product/newest`, { cache: "no-store" });
    const data = await rep.json();
    return data as Array<Product>;
};

// const getPopularProducts = async () => {
//     const rep = await fetch(`${apiEndpoint}/api/product/popular`, { cache: "no-store" });
//     const data = await rep.json();
//     return data as Array<Product>;
// };

export default async function Page() {
    const newestProducts = await getNewestProducts();

    return (
        <>
            <Navbar />
            {/* <Hero /> */}
            {/* <Hero2 /> */}
            {/* <Features />
            <NewListings newestProducts={newestProducts} />
            <FeatureAbout /> */}
            <Footer />
        </>
    );
}
