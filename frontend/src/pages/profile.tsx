import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { withAuthSsrRedirection } from "../hoc/withAuth";
import { Footer } from "../modules/Footer";
import { Navbar } from "../modules/Navbar";
import { ProfileBlock } from "../modules/user/ProfileBlock";
import { GetServerSidePropsContextUser } from "../type/GetServerSidePropsContextUser";
import { User } from "../type/User";

export type ProfileProps = {
    user: User;
};

export const getServerSideProps = withAuthSsrRedirection(async (context: GetServerSidePropsContextUser) => ({
    props: {
        ...(await serverSideTranslations(context.locale!, ["common"])),
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
