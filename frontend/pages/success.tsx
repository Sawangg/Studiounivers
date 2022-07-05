import axios from "axios";
import type { GetServerSidePropsContext, NextPage } from "next";
import Head from "next/head";
import { apiEndpoint } from "../lib/constants";
import { Footer } from "../modules/Footer";
import { Navbar } from "../modules/Navbar";
import { SuccessPaymentBlock } from "../modules/product/SuccessPaymentBlock";

export type SuccessPaymentProps = {
    stripeData: any;
};

const verifyPayment = async (stripeId: string) => {
    try {
        const rep = await axios.post(`${apiEndpoint}/api/payment/verify`, { sessionId: stripeId }, { withCredentials: true });
        return rep.data;
    } catch (err) {
        return null;
    }
};

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    const stripeData = await verifyPayment(context.req.url?.split("=")[1]!);

    if (!stripeData) {
        return {
            redirect: {
                permanent: false,
                destination: "/",
            },
        };
    }

    return {
        props: {
            stripeData,
        },
    };
};

const SuccessPayment: NextPage<SuccessPaymentProps> = ({ stripeData }) => (
    <>
        <Head>
            <title>StudioUnivers — Succès</title>
        </Head>
        <div className="w-full flex flex-col h-screen tracking-normal bg-white-100">
            <Navbar />
            <SuccessPaymentBlock stripeData={stripeData} />
            <Footer />
        </div>
    </>
);

export default SuccessPayment;
