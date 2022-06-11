import type { NextPage } from "next";
import Head from "next/head";
import { Footer } from "../modules/Footer";
import { Navbar } from "../modules/Navbar";
import { CartBlock } from "../modules/user/CartBlock";

const Cart: NextPage = () => (
    <>
        <Head>
            <title>StudioUnivers | Panier</title>
        </Head>
        <div className="w-full flex flex-col h-screen tracking-normal bg-white-100">
            <Navbar />
            <CartBlock />
            <Footer />
        </div>
    </>
);

export default Cart;
