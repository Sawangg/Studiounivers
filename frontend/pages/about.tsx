import type { GetServerSidePropsContext, NextPage } from "next";
import Head from "next/head";
import { Footer } from "@modules/Footer";
import { FeatureAbout } from "@modules/landing/FeatureAbout";
import { Features } from "@modules/landing/Features";
import { Newsletter } from "@modules/landing/Newsletter";
import { Navbar } from "@modules/Navbar";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    return {
        props: {
            ...(await serverSideTranslations(context.locale!, ["common"])),
        },
    };
};

const Landing: NextPage = () => (
    <>
        <Head>
            <title>StudioUnivers — A propos</title>
        </Head>
        <Navbar />
        <div className="my-24">
            <h1 className="font-title text-5xl text-center">
                Une marque fondée sur l&apos;amour de l&apos;artisanat, de la qualité <br />
                et d&apos;un service clientèle exceptionnel.
            </h1>
        </div>
        <FeatureAbout />
        <Features />
        <Newsletter />
        <Footer />
    </>
);

export default Landing;
