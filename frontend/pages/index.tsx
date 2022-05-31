import type { NextPage } from "next";
import Head from "next/head";
import { Navbar } from "../modules/landing/Navbar";

const Landing: NextPage = () => (
    <>
        <Head>
            <title>StudioUnivers</title>
        </Head>
        <div className="bg-blue w-1 h-1">
            <Navbar />
        </div>
    </>
);

export default Landing;
