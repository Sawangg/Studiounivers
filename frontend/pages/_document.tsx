import React from "react";
import { Head, Html, Main, NextScript } from "next/document";
import { NotificationsHub } from "../modules/NotificationHub";

export default function Document() {
    return (
        <Html>
            <Head />
            <body className="bg-white font-body leading-normal text-primary-800">
                <Main />
                <NotificationsHub />
                <NextScript />
            </body>
        </Html>
    );
}
