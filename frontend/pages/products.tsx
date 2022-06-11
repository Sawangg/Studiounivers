import type { NextPage } from "next";
import Head from "next/head";
import { Footer } from "../modules/Footer";
import { Navbar } from "../modules/Navbar";
import { ProductsPage } from "../modules/product/ProductsPage";
import { Product } from "../styles/types/Product";
import { apiEndpoint } from "./lib/constants";

export interface ProductsProps {
    products: Array<Product>;
}

export const getAllProducts = async () => {
    const res = await fetch(`${apiEndpoint}/api/product/`);
    const data = await res.json();

    return data as Array<Product>;
};

export const getStaticProps = async () => {
    const products = await getAllProducts();
    return {
        props: {
            products,
        },
    };
};

const Products: NextPage<ProductsProps> = ({ products }) => (
    <>
        <Head>
            <title>StudioUnivers | Produits</title>
        </Head>
        <Navbar />
        <ProductsPage products={products} />
        <Footer />
    </>
);

export default Products;
