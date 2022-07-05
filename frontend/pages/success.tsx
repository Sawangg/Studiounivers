import type { NextPage } from "next";
import Head from "next/head";
import { Footer } from "../modules/Footer";
import { Navbar } from "../modules/Navbar";
import { SuccessPaymentBlock } from "../modules/product/SuccessPaymentBlock";

// Page should be protected
const SuccessPayment: NextPage = () => (
    <>
        <Head>
            <title>StudioUnivers — Succès</title>
        </Head>
        <div className="w-full flex flex-col h-screen tracking-normal bg-white-100">
            <Navbar />
            <SuccessPaymentBlock />
            <Footer />
        </div>
    </>
);

export default SuccessPayment;
