import Image from "next/image";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { Button } from "../../ui/Button";

export const FeatureAbout: React.FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = () => (
    <div className="w-full flex flex-row">
        <div className="w-1/2 flex flex-col justify-between px-28 pt-24 pb-16">
            <div className="">
                <h3 className="font-title text-3xl mx-auto mb-8">D&apos;une petite entreprise à une marque de renommée</h3>
                <p className="text-lg text-white-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi distinctio vero veniam illum a autem quisquam repellendus magni similique earum asperiores non, totam sed minima quibusdam, atque fugit neque doloremque.
                    <br /><br />
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi distinctio vero veniam illum a autem quisquam repellendus magni similique earum asperiores non, totam sed minima quibusdam, atque fugit neque doloremque.
                </p>
            </div>
            <div>
                <Button color="secondary">Nous contacter</Button>
            </div>
        </div>
        <div className="w-1/2">
            <div className="w-full h-[53.125rem] relative">
                <Image src="/assets/featureAbout.png" layout="fill" alt="featureAboutImg" />
            </div>
        </div>
    </div>
);
