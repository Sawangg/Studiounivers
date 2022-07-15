import type { GetServerSidePropsContext, NextPage } from "next";
import Head from "next/head";
import { Footer } from "../modules/Footer";
import { Navbar } from "../modules/Navbar";
import { SuccessPaymentBlock } from "../modules/product/SuccessPaymentBlock";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export type SuccessPaymentProps = {
    sessionId: string;
};

// Not truly SSR because auth cookie is not available in context ...
// export const getServerSideProps = (context: GetServerSidePropsContext) => ({
//     props: {
//         sessionId: context.req.url?.split("=")[1],
//     },
// });

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    return {
        props: {
            ...(await serverSideTranslations(context.locale!, ["common"])),
        },
    };
};

const SuccessPayment: NextPage<SuccessPaymentProps> = ({ sessionId }) => (
    <>
        <Head>
            <title>StudioUnivers — Succès</title>
        </Head>
        <div className="w-full flex flex-col h-screen tracking-normal bg-white-100">
            <Navbar />
            <SuccessPaymentBlock sessionId={""} />
            <Footer />
        </div>
    </>
);

export default SuccessPayment;
