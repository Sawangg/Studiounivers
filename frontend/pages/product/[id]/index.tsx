import type { NextPage } from "next";
import Head from "next/head";
import { apiEndpoint } from "../../../lib/constants";
import { Footer } from "../../../modules/Footer";
import { Navbar } from "../../../modules/Navbar";
import { ProductBlock } from "../../../modules/product/ProductBlock";
import { Product } from "../../../styles/types/Product";

export interface ProductPageProps {
    product: Product;
}

export const getProduct = async (id: number) => {
    const res = await fetch(`${apiEndpoint}/api/product/${id}`);
    console.log(res);
    const data = await res.json();

    return data as Product;
};

export const getServerSideProps = async ({ params }) => {
    const product = await getProduct(+params.id);

    return {
        props: {
            product,
        },
    };
};

const ProductPage: NextPage<ProductPageProps> = ({ product }) => (
    <>
        <Head>
            <title>StudioUnivers | Produit</title>
        </Head>
        <div className="w-full flex flex-col h-screen tracking-normal">
            <Navbar />
            <ProductBlock
                productId={product.id}
                title={product.name}
                price={product.price}
                description={product.description}
                imagePath={product.photos[0]}
            />
            <Footer />
        </div>
    </>
);

export default ProductPage;
