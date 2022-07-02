import type { NextPage } from "next";
import Head from "next/head";
import { withAuthSsrRedirection } from "../hoc/withAuth";
import { Footer } from "../modules/Footer";
import { Navbar } from "../modules/Navbar";
import { ProfileBlock } from "../modules/user/ProfileBlock";
import { GetServerSidePropsContextUser } from "../types/GetServerSidePropsContextUser";
import { User } from "../types/User";

export type ProfileProps = {
    user: User;
};

export const getServerSideProps = withAuthSsrRedirection((context: GetServerSidePropsContextUser) => ({
    props: {
        user: context.user,
    },
}));


const Profile: NextPage<ProfileProps> = ({ user }) => (
    <>
        <Head>
            <title>StudioUnivers — Profile</title>
        </Head>
        <div className="w-full flex flex-col h-screen tracking-normal bg-white-100">
            <Navbar user={user} />
            <ProfileBlock user={user} />
            <Footer />
        </div>
    </>
);

export default Profile;
