import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import Image from "next/image";
import { TextInput } from "@ui/TextInput";

export const Newsletter: React.FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = () => (
  <section className="flex w-full flex-row py-20 text-white">
    <div className="relative h-[18rem]">
      <Image src="/assets/header.png" alt="header" className="-z-50 select-none" fill />
      <div className="flex flex-col gap-6">
        <h2 className="absolute bottom-9 z-50 pl-24 font-title text-5xl text-white">Rejoingnez notre newsletter</h2>
        <p>Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
        <div className="flex flex-row">
          <div className="flex flex-row gap-4">
            <Image src="/assets/icons/checkmark.svg" width={16} height={16} alt="checkmark" />
            <p>Offres exclusives</p>
          </div>
          <div className="flex flex-row gap-4">
            <Image src="/assets/icons/checkmark.svg" width={16} height={16} alt="checkmark" />
            <p>Evénements gratuits</p>
          </div>
          <div className="flex flex-row gap-4">
            <Image src="/assets/icons/checkmark.svg" width={16} height={16} alt="checkmark" />
            <p>Promotions</p>
          </div>
        </div>
        <TextInput color="secondary" placeholder="votre@email.com" button="Rejoindre" />
      </div>
    </div>
  </section>
);
