import type { NextPage } from "next";
import Head from "next/head";
import axios from "axios";
import { apiEndpoint } from "../../../lib/constants";
import { Footer } from "../../../modules/Footer";
import { Navbar } from "../../../modules/Navbar";
import { ProductBlock } from "../../../modules/product/ProductBlock";
import { Product } from "../../../types/Product";
import { Features } from "../../../modules/landing/Features";
import { User } from "../../../types/User";
import { GetServerSidePropsContextUser } from "../../../types/GetServerSidePropsContextUser";
import { withAuthSsr } from "../../../hoc/withAuth";

export interface ProductPageProps {
    user: User | null;
    product: Product;
}

export const getProduct = async (id: number) => {
    const rep = await axios.get(`${apiEndpoint}/api/product/${id}`);
    return rep.data as Product;
};

export const getServerSideProps = withAuthSsr(async (context: GetServerSidePropsContextUser) => {
    const product = await getProduct(+context.params!.id!);

    return {
        props: {
            user: context.user,
            product,
        },
    };
});

const ProductPage: NextPage<ProductPageProps> = ({ user, product }) => (
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
            <Features />
            <Footer />
        </div>
    </>
);

export default ProductPage;
