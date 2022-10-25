import type { NextPage } from "next";
import Head from "next/head";
import { withAuthSsr } from "@hoc/withAuth";
import { apiEndpoint } from "@lib/constants";
import { Footer } from "@modules/Footer";
import { Navbar } from "@modules/Navbar";
import { ProductsPage } from "@modules/product/ProductsPage";
import { GetServerSidePropsContextUser } from "@type/GetServerSidePropsContextUser";
import { Product } from "@type/Product";
import { User } from "@type/User";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export interface ProductsProps {
    user: User | null;
    products: Array<Product>;
}

export const getAllProducts = async () => {
    const res = await fetch(`${apiEndpoint}/api/product/`);
    const data = await res.json();
    return data as Array<Product>;
};

export const getServerSideProps = withAuthSsr(async (context: GetServerSidePropsContextUser) => {
    const products = await getAllProducts();

    if (!products || products.length === 0) {
        return {
            redirect: {
                permanent: false,
                destination: "/",
            },
        };
    }

    return {
        props: {
            user: context.user,
            products,
            ...(await serverSideTranslations(context.locale!, ["common"])),
        },
    };
});

const Products: NextPage<ProductsProps> = ({ user, products }) => (
    <>
        <Head>
            <title>StudioUnivers — Produits</title>
        </Head>
        <Navbar user={user} />
        <ProductsPage products={products} />
        <Footer />
    </>
);

export default Products;
