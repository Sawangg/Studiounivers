import Image from "next/image";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { Input } from "@ui/Input";

export const Newsletter: React.FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = () => (
    <div className="w-full py-20 flex flex-row text-white">
        <div className="h-[18rem] relative">
            <Image src="/assets/header.png" layout="fill" alt="header" className="-z-50 select-none" />
            <div className="">
                <div className="flex flex-col gap-6">
                    <h2 className="absolute bottom-9 pl-24 text-5xl font-title text-white z-50">
                        Rejoingnez notre newsletter
                    </h2>
                    <p className="">
                        Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and
                        more
                    </p>
                    <div className="flex flex-row">
                        <div className="flex flex-row gap-4">
                            <Image src="/assets/icons/checkmark.svg" width="16px" height="16px" alt="checkmark" />
                            <p>Offres exclusives</p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <Image src="/assets/icons/checkmark.svg" width="16px" height="16px" alt="checkmark" />
                            <p>Evénements gratuits</p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <Image src="/assets/icons/checkmark.svg" width="16px" height="16px" alt="checkmark" />
                            <p>Promotions</p>
                        </div>
                    </div>
                    <Input color="secondary" placeholder="votre@email.com" button="Rejoindre" />
                </div>
            </div>
        </div>
    </div>
);
