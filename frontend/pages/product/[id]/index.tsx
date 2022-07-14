import React from "react";
import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { withAuthSsr } from "../../../hoc/withAuth";
import { apiEndpoint } from "../../../lib/constants";
import { Footer } from "../../../modules/Footer";
import { Features } from "../../../modules/landing/Features";
import { NewListings } from "../../../modules/landing/NewListings";
import { Navbar } from "../../../modules/Navbar";
import { ProductBlock } from "../../../modules/product/ProductBlock";
import { GetServerSidePropsContextUser } from "../../../types/GetServerSidePropsContextUser";
import { Product } from "../../../types/Product";
import { User } from "../../../types/User";

export interface ProductPageProps {
    user: User | null;
    product: Product;
    alsoLikeProducts: Array<Product> | null;
}

const getAlsoLikeProducts = async () => {
    const rep = await axios.get(`${apiEndpoint}/api/product/newest`);
    return rep.data as Array<Product>;
};

export const getProduct = async (id: number) => {
    const rep = await axios.get(`${apiEndpoint}/api/product/${id}`);
    return rep.data as Product;
};

export const getServerSideProps = withAuthSsr(async (context: GetServerSidePropsContextUser) => {
    try {
        const product = await getProduct(+context.params!.id!);
        const alsoLikeProducts = await getAlsoLikeProducts();
        return {
            props: {
                user: context.user,
                alsoLikeProducts,
                product,
                ...(await serverSideTranslations(context.locale!, ["common"])),
            },
        };
    } catch {
        return {
            redirect: {
                permanent: false,
                destination: "/",
            },
        };
    }
});

const ProductPage: NextPage<ProductPageProps> = ({ user, product, alsoLikeProducts }) => (
    <>
        <Head>
            <title>{`StudioUnivers — ${product.name}`}</title>
        </Head>
        <div className="w-full flex flex-col h-screen tracking-normal">
            <Navbar user={user} />
            <ProductBlock
                productId={product.id}
                title={product.name}
                price={product.price}
                description={product.description}
                imagePath={product.photos[0]}
            />
            {/* Replace by AlsoLike when component is done */}
            <NewListings newestProducts={alsoLikeProducts!} />
            <Features />
            <Footer />
        </div>
    </>
);

export default ProductPage;
