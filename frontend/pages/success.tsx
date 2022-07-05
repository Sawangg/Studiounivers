import type { GetServerSidePropsContext, NextPage } from "next";
import Head from "next/head";
import { Suspense } from "react";
import { Footer } from "../modules/Footer";
import { Navbar } from "../modules/Navbar";
import { SuccessPaymentBlock } from "../modules/product/SuccessPaymentBlock";

export type SuccessPaymentProps = {
    sessionId: string;
}

// Not truly SSR because auth cookie is not available in context ...
// export const getServerSideProps = (context: GetServerSidePropsContext) => ({
//     props: {
//         sessionId: context.req.url?.split("=")[1],
//     },
// });

const SuccessPayment: NextPage<SuccessPaymentProps> = ({ sessionId }) => (
    <>
        <Head>
            <title>StudioUnivers — Succès</title>
        </Head>
        <div className="w-full flex flex-col h-screen tracking-normal bg-white-100">
            <Navbar />
            <Suspense fallback={<>cringe</>}>
                <SuccessPaymentBlock sessionId={""} />
            </Suspense>
            <Footer />
        </div>
    </>
);

export default SuccessPayment;
