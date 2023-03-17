import { Metadata } from "next";
import { LoginBlock } from "@modules/auth/LoginBlock";

export const metadata: Metadata = {
    title: "StudioUnivers - Login",
};

export default async function Page() {
    return <LoginBlock />;
}
