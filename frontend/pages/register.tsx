import type { NextPage } from "next";
import Head from "next/head";
import { Footer } from "../modules/Footer";
import { RegisterBlock } from "../modules/auth/RegisterBlock";
import { Navbar } from "../modules/Navbar";

const Login: NextPage = () => (
    <>
        <Head>
            <title>StudioUnivers — Login</title>
        </Head>
        <div className="w-full flex flex-col h-screen tracking-normal bg-white-100">
            <Navbar />
            <RegisterBlock />
            <Footer />
        </div>
    </>
);

export default Login;
