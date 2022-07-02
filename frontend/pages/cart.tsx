import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import { withAuthSsr } from "../hoc/withAuth";
import { apiEndpoint } from "../lib/constants";
import { Footer } from "../modules/Footer";
import { Navbar } from "../modules/Navbar";
import { CartBlock } from "../modules/user/CartBlock";
import { Cart } from "../types/Cart";
import { GetServerSidePropsContextUser } from "../types/GetServerSidePropsContextUser";

export type CartProps = {
    cart: Cart | null;
};

const getCart = async (context: GetServerSidePropsContextUser) => {
    try {
        const rep = await axios({
            method: "get",
            url: `${apiEndpoint}/api/user/cart`,
            headers: context.req ? { cookie: context.req.headers.cookie! } : undefined,
        });
        return rep.data as Cart;
    } catch {
        return null;
    }
};

export const getServerSideProps = withAuthSsr(async (context: GetServerSidePropsContextUser) => {
    const cart = await getCart(context);

    return {
        props: {
            cart,
        },
    };
});

const Cart: NextPage<CartProps> = ({ cart }) => (
    <>
        <Head>
            <title>StudioUnivers — Panier</title>
        </Head>
        <div className="w-full flex flex-col h-screen tracking-normal bg-white-100">
            <Navbar />
            <CartBlock cart={cart!} />
            <Footer />
        </div>
    </>
);

export default Cart;
