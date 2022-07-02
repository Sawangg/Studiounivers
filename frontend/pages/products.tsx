import type { NextPage } from "next";
import Head from "next/head";
import axios from "axios";
import { apiEndpoint } from "../lib/constants";
import { Footer } from "../modules/Footer";
import { Navbar } from "../modules/Navbar";
import { ProductsPage } from "../modules/product/ProductsPage";
import { Product } from "../types/Product";
import { User } from "../types/User";
import { withAuthSsr } from "../hoc/withAuth";
import { GetServerSidePropsContextUser } from "../types/GetServerSidePropsContextUser";

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
