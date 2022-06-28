import type { NextPage } from "next";
import Head from "next/head";
import { withAuthSsr } from "../hoc/withAuth";
import { Footer } from "../modules/Footer";
import { FeatureAbout } from "../modules/landing/FeatureAbout";
import { Features } from "../modules/landing/Features";
import { Hero } from "../modules/landing/Hero";
import { Navbar } from "../modules/Navbar";
import { GetServerSidePropsContextUser } from "../types/GetServerSidePropsContextUser";
import { User } from "../types/User";

export type LandingProps = {
    user: User | null;
};

export const getServerSideProps = withAuthSsr((context: GetServerSidePropsContextUser) => ({
    props: {
        user: context.user,
    },
}));

const Landing: NextPage<LandingProps> = ({ user }) => (
    <>
        <Head>
            <title>StudioUnivers</title>
        </Head>
        <Navbar user={user} />
        <Hero />
        <Features />
        <FeatureAbout />
        <Footer />
    </>
);

export default Landing;
