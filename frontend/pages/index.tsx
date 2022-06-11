import type { NextPage } from "next";
import Head from "next/head";
import { FeatureAbout } from "../modules/landing/FeatureAbout";
import { Features } from "../modules/landing/Features";
import { Footer } from "../modules/Footer";
import { Hero } from "../modules/landing/Hero";
import { Navbar } from "../modules/Navbar";

const Landing: NextPage = () => (
    <>
        <Head>
            <title>StudioUnivers</title>
        </Head>
        <Navbar />
        <Hero />
        <Features />
        <FeatureAbout />
        <Footer />
    </>
);

export default Landing;
