import type { NextPage } from "next";
import Head from "next/head";
import { Footer } from "../modules/Footer";
import { Navbar } from "../modules/Navbar";

// Page should be protected
const SuccessPayment: NextPage = () => (
    <>
        <Head>
            <title>StudioUnivers — Succès</title>
        </Head>
        <div className="w-full flex flex-col h-screen tracking-normal bg-white-100">
            <Navbar />
            Success
            <Footer />
        </div>
    </>
);

export default SuccessPayment;
