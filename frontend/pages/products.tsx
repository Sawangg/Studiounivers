import type { NextPage } from "next";
import Head from "next/head";
import axios from "axios";
import { apiEndpoint } from "../lib/constants";
import { Footer } from "../modules/Footer";
import { Navbar } from "../modules/Navbar";
import { ProductsPage } from "../modules/product/ProductsPage";
import { Product } from "../types/Product";

export interface ProductsProps {
    products: Array<Product>;
}

export const getAllProducts = async () => {
    const rep = await axios.get(`${apiEndpoint}/api/product/`);
    return rep.data as Array<Product>;
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
            <title>StudioUnivers — Produits</title>
        </Head>
        <Navbar />
        <ProductsPage products={products} />
        <Footer />
    </>
);

export default Products;
