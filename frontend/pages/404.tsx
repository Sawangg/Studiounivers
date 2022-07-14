import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Footer } from "../modules/Footer";
import { Navbar } from "../modules/Navbar";

// Translation needs fix here
const NotFound: NextPage = () => (
    <>
        <Head>
            <title>StudioUnivers — 404</title>
        </Head>
        <div className="w-full flex flex-col h-screen tracking-normal">
            <Navbar />
            <div className="w-full h-full flex items-center justify-center">
                <h1 className="text-5xl">404 — Not Found</h1>
            </div>
            <Footer />
        </div>
    </>
);

export default NotFound;
