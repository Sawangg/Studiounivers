import Image from "next/image";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { Button } from "@ui/Button";

export const FeatureAbout: React.FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = () => (
    <section className="flex w-full flex-col md:flex-row">
        <div className="flex w-full flex-col justify-between px-7 pb-10 md:w-1/2 md:px-28 md:pt-24 md:pb-16">
            <div>
                <h3 className="mx-auto mb-8 font-title text-2xl md:text-3xl">
                    D&apos;une petite entreprise à une marque de renommée
                </h3>
                <p className="text-md text-white-500 md:text-lg">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi distinctio vero veniam illum a autem
                    quisquam repellendus magni similique earum asperiores non, totam sed minima quibusdam, atque fugit
                    neque doloremque.
                    <br />
                    <br />
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi distinctio vero veniam illum a autem
                    quisquam repellendus magni similique earum asperiores non, totam sed minima quibusdam, atque fugit
                    neque doloremque.
                </p>
            </div>
            <div className="mt-7 md:mt-0">
                <Button color="secondary" className="w-full md:w-1/4">
                    Nous contacter
                </Button>
            </div>
        </div>
        <div className="w-full md:w-1/2">
            <div className="relative h-96 w-full md:h-[53.125rem]">
                <Image src="/assets/featureAbout.png" fill alt="" />
            </div>
        </div>
    </section>
);
