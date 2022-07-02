import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import { withAuthSsr } from "../hoc/withAuth";
import { apiEndpoint } from "../lib/constants";
import { Footer } from "../modules/Footer";
import { FeatureAbout } from "../modules/landing/FeatureAbout";
import { Features } from "../modules/landing/Features";
import { Hero } from "../modules/landing/Hero";
import { NewListings } from "../modules/landing/NewListings";
import { Navbar } from "../modules/Navbar";
import { GetServerSidePropsContextUser } from "../types/GetServerSidePropsContextUser";
import { Product } from "../types/Product";
import { User } from "../types/User";

export type LandingProps = {
    user: User | null;
    newestProducts: Array<Product> | null;
    popularProducts: Array<Product>;
};

const getNewestProducts = async () => {
    const rep = await axios.get(`${apiEndpoint}/api/product/newest`);
    return rep.data as Array<Product>;
};

const getPopularProducts = async () => {
    const rep = await axios.get(`${apiEndpoint}/api/product/popular`);
    return rep.data as Array<Product>;
};

export const getServerSideProps = withAuthSsr(async (context: GetServerSidePropsContextUser) => {
    const newestProducts = await getNewestProducts();
    const popularProducts = await getPopularProducts();

    return {
        props: {
            user: context.user,
            newestProducts,
            popularProducts,
        },
    };
});

const Landing: NextPage<LandingProps> = ({ user, newestProducts, popularProducts }) => (
    <>
        <Head>
            <title>StudioUnivers</title>
        </Head>
        <Navbar />
        <Hero />
        <Features />
        <NewListings newestProducts={newestProducts!} />
        <FeatureAbout />
        <Footer />
    </>
);

export default Landing;
