import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="fr">
            <Head />
            <body className="bg-white font-body leading-normal text-primary-800">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
