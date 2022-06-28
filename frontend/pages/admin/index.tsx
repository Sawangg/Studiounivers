import type { NextPage } from "next";
import Head from "next/head";
import axios from "axios";
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

export async function getServerSideProps() {
    const user = await getUser();
    console.log(user);

    if (!user) {
        return {
            redirect: {
                destination: "/login",
                permanent: false,
            },
        };
    }

    return {
        props: { user },
    };
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
