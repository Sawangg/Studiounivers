import type { NextPage } from "next";
import Head from "next/head";
import { Footer } from "../modules/Footer";
import { Navbar } from "../modules/Navbar";

const Profile: NextPage = () => (
    <>
        <Head>
            <title>StudioUnivers — Profile</title>
        </Head>
        <div className="w-full flex flex-col h-screen tracking-normal bg-white-100">
            <Navbar />
            Profile

            <Footer />
        </div>
    </>
);

export default Profile;
