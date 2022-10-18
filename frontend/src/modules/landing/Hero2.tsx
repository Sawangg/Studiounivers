import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { Button } from "@ui/Button";

export const Hero2: React.FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = () => {
    const { t } = useTranslation();
    const router = useRouter();

    return (
        <section className="w-full hidden md:flex flex-row relative">
            <div className="w-full h-[50rem] 3xl:h-[60rem] relative">
                <Image src="/assets/hero2.png" layout="fill" alt="heroImg" />
            </div>

            <div className="w-5/12 bg-white absolute top-[20%] right-28 p-16">
                <h2 className="font-title text-3xl md:text-4xl">{t("hero.title")}</h2>
                <p className="text-lg mt-6">Shop the new Spring 2022 collection today</p>
                <Button color="secondary" className="mt-36 w-full md:w-2/6" onClick={() => router.push("/products")}>
                    {t("hero.button")}
                </Button>
            </div>
        </section>
    );
};
