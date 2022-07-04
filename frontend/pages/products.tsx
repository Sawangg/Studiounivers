import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import { withAuthSsr } from "../hoc/withAuth";
import { apiEndpoint } from "../lib/constants";
import { Footer } from "../modules/Footer";
import { Navbar } from "../modules/Navbar";
import { ProductsPage } from "../modules/product/ProductsPage";
import { GetServerSidePropsContextUser } from "../types/GetServerSidePropsContextUser";
import { Product } from "../types/Product";
import { User } from "../types/User";

export interface ProductsProps {
    user: User | null;
    products: Array<Product>;
}

export const getAllProducts = async () => {
    const rep = await axios.get(`${apiEndpoint}/api/product/`);
    return rep.data as Array<Product>;
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
