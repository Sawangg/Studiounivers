import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import { apiEndpoint } from "../../lib/constants";

export interface AdminLandingProps {
    user: any;
}

export const getUser = async () => {
    try {
        const rep = await axios.get(`${apiEndpoint}/api/auth`, { withCredentials: true });
        return rep.data;
    } catch (err) {
        return null;
    }
};

export async function getServerSideProps(context) {
    try {
        const rep = await axios({
            method: "get",
            url: `${apiEndpoint}/api/auth`,
            headers: context.req ? { cookie: context.req.headers.cookie } : undefined,
        });

        if (!rep.data) throw new Error("No Token");

        return {
            props: { user: rep.data },
        };
    } catch {
        return {
            redirect: {
                destination: "/login",
                permanent: false,
            },
        };
    }
}

const AdminLanding: NextPage<AdminLandingProps> = ({ user }) => (
    <>
        <Head>
            <title>StudioUnivers — Admin</title>
        </Head>
        <div className="w-full flex flex-col h-screen tracking-normal">
            {user.id}
        </div>
    </>
);

export default AdminLanding;
