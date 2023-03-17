import { ReactNode } from "react";
import { Metadata } from "next";
import { Footer } from "@modules/navigation/Footer";
import { Navbar } from "@modules/navigation/Navbar";
import "@styles/globals.css";

export const metadata: Metadata = {
    title: "StudioUnivers",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="fr">
            <body className="min-h-screen bg-white font-body leading-normal text-primary-800">
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
