"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { Button } from "@ui/Button";

export const Hero2: React.FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = () => {
    const router = useRouter();

    const t = (str: string) => {
        return <p>{str}</p>;
    };

    return (
        <section className="relative hidden w-full flex-row md:flex">
            <div className="relative h-[50rem] w-full 3xl:h-[60rem]">
                <Image src="/assets/hero2.png" alt="" fill />
            </div>

            <div className="absolute top-[20%] right-28 w-5/12 bg-white p-16">
                <h2 className="font-title text-3xl md:text-4xl">{t("hero.title")}</h2>
                <p className="mt-6 text-lg"> {t("hero.desc")}</p>
                <Button color="secondary" className="mt-36 w-full md:w-2/6" onClick={() => router.push("/products")}>
                    {t("hero.button")}
                </Button>
            </div>
        </section>
    );
};
