import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "StudioUnivers — Dashboard",
  description: "Admin Dashboard",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <body className={`bg-white dark:bg-zinc-900 ${inter.className}`}>{children}</body>;
}
