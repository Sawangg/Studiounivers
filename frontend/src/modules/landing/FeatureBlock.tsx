import Image from "next/future/image";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";

export type FeatureBlockProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    title: string;
    description: string;
    imagePath: string;
};

export const FeatureBlock: React.FC<FeatureBlockProps> = ({ title, description, imagePath, ...props }) => (
    <section
        className="w-full block max-w-md 2xl:max-w-[20rem] 4xl:max-w-md p-7 4xl:p-10 overflow-hidden md:bg-white-300"
        {...props}
    >
        <Image src={imagePath} width={24} height={24} alt="icon" />
        <h4 className="font-title text-xl 2xl:text-lg 4xl:text-2xl my-2">{title}</h4>
        <p className="w-full text-md 4xl:text-lg break-words">{description}</p>
    </section>
);
