import Image from "next/image";
import { useRouter } from "next/router";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { Button } from "../../ui/Button";

export const Listings: React.FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = () => {
    const router = useRouter();

    return (
        <div className="w-full px-28 py-20 flex flex-col text-white">
            <div className="w-3/5 flex flex-col justify-between bg-primary-700 p-16">
                <h2 className="font-display text-4xl">Nouveaux produits</h2>
                <div className="">
                    <Image src="/assets/hero.png" layout="fill" alt="heroImg" />

                </div>
                <Button className="mt-6" onClick={() => router.push("/products")}>Voir les produits</Button>
            </div>
        </div>
    );
};
