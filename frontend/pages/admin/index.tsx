import type { NextPage } from "next";
import Head from "next/head";
import { withAuthSsrRedirection } from "../../hoc/withAuth";
import { GetServerSidePropsContextUser } from "../../type/GetServerSidePropsContextUser";
import { User } from "../../type/User";

export type AdminLandingProps = {
    user: User;
};

export const getServerSideProps = withAuthSsrRedirection((context: GetServerSidePropsContextUser) => ({
    props: {
        user: context.user,
    },
}));

const AdminLanding: NextPage<AdminLandingProps> = ({ user }) => (
    <>
        <Head>
            <title>StudioUnivers — Admin</title>
        </Head>
        <div className="w-full flex flex-col h-screen tracking-normal">{user.username}</div>
    </>
);

export default AdminLanding;
