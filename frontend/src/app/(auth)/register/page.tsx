import { Metadata } from "next";
import { RegisterBlock } from "@modules/auth/RegisterBlock";

export const metadata: Metadata = {
    title: "StudioUnivers - Register",
};

export default function Page() {
    return <RegisterBlock />;
}
