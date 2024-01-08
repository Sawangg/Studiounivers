import type { Metadata } from "next";
import { Footer } from "@components/navigation/Footer";
import Navbar from "@components/navigation/Navbar";

export const metadata: Metadata = {
  title: "StudioUnivers — 2024",
  description: "Commerce website",
};

export default function StoreLayout({ children }: { children: React.ReactNode }) {
  return (
    <body className="flex min-h-screen flex-col bg-white font-body leading-normal text-primary-800">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </body>
  );
}
