import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import { withAuthSsrRedirection } from "../hoc/withAuth";
import { apiEndpoint } from "../lib/constants";
import { Footer } from "../modules/Footer";
import { Navbar } from "../modules/Navbar";
import { CartBlock } from "../modules/user/CartBlock";
import { Cart } from "../types/Cart";
import { GetServerSidePropsContextUser } from "../types/GetServerSidePropsContextUser";
import { User } from "../types/User";

export type CartProps = {
    user: User | null;
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

export const getServerSideProps = withAuthSsrRedirection(async (context: GetServerSidePropsContextUser) => {
    const cart = await getCart(context);

    if (!cart) {
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
            cart,
        },
    };
});

const Cart: NextPage<CartProps> = ({ user, cart }) => (
    <>
        <Head>
            <title>StudioUnivers — Panier</title>
        </Head>
        <div className="w-full flex flex-col h-screen tracking-normal bg-white-100">
            <Navbar user={user} />
            <CartBlock cart={cart!} />
            <Footer />
        </div>
    </>
);

export default Cart;
