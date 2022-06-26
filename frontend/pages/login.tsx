import type { NextPage } from "next";
import Head from "next/head";
import { Footer } from "../modules/Footer";
import { LoginBlock } from "../modules/login/LoginBlock";
import { Navbar } from "../modules/Navbar";

const Login: NextPage = () => (
    <>
        <Head>
            <title>StudioUnivers | Login</title>
        </Head>
        <div className="w-full flex flex-col h-screen tracking-normal bg-white-100">
            <Navbar />
            <LoginBlock />
            <Footer />
        </div>
    </>
);

export default Login;
