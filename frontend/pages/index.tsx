import type { NextPage } from "next";
import Head from "next/head";
import { Navbar } from "../modules/landing/Navbar";

const Landing: NextPage = () => (
    <>
        <Head>
            <title>StudioUnivers</title>
        </Head>
        <div className="">
            <Navbar />
        </div>
    </>
);

export default Landing;
