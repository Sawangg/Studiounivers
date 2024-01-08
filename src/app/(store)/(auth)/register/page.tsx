import type { Metadata } from "next";
import { RegisterBlock } from "@components/auth/RegisterBlock";

export const metadata: Metadata = {
  title: "StudioUnivers — Register",
};

export default function Page() {
  return (
    <>
      <RegisterBlock />
    </>
  );
}
