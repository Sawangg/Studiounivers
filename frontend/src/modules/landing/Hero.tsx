"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { Button } from "@ui/Button";

export const Hero: React.FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = () => {
    const t = (str: string) => {
        return <p>{str}</p>;
    };

    const router = useRouter();

    return (
        <section className="flex w-full flex-row text-white md:hidden md:px-28 md:py-20">
            <div className="flex w-full flex-col justify-between bg-primary-700 p-7 md:w-3/5 md:p-16">
                <div className="md:w-[calc(100%-32%)]">
                    <h2 className="font-title text-3xl md:text-4xl">{t("hero.title")}</h2>
                    <p className="mt-16 md:hidden">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta pariatur sapiente molestiae
                        placeat suscipit eum possimus, rerum, sit excepturi eveniet sequi. Eveniet excepturi, quas vero
                        alias deserunt earum? Assumenda, molestiae?
                    </p>
                    <Button className="mt-6 w-full md:w-2/6" onClick={() => router.push("/products")}>
                        {t("hero.button")}
                    </Button>
                </div>
                <div className="hidden md:block md:w-5/6">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta pariatur sapiente molestiae
                        placeat suscipit eum possimus, rerum, sit excepturi eveniet sequi. Eveniet excepturi, quas vero
                        alias deserunt earum? Assumenda, molestiae?
                    </p>
                </div>
            </div>
            <div className="hidden h-[40rem] max-h-[40rem] min-h-[40rem] w-2/5 items-center justify-center bg-white-100 md:flex">
                <div className="relative h-[30rem] w-[35rem]">
                    <Image src="/assets/hero.png" alt="" fill />
                </div>
            </div>
        </section>
    );
};
