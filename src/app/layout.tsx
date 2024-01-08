import type { Metadata } from "next";
import "@styles/globals.css";

export const metadata: Metadata = {
  title: "StudioUnivers — 2024",
  description: "Commerce website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="fr">{children}</html>;
}
