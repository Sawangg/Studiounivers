import type { Metadata } from "next";
import { Footer } from "@components/navigation/Footer";
import Navbar from "@components/navigation/Navbar";

export const metadata: Metadata = {
  title: "StudioUnivers — Not found",
};

export default function NotFound() {
  return (
    <div className="flex h-screen w-full flex-col tracking-normal">
      <Navbar />
      <div className="flex h-full w-full items-center justify-center">
        <h1 className="text-5xl">404 — Not Found</h1>
      </div>
      <Footer />
    </div>
  );
}
