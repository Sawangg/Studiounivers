import Image from "next/image";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";

export type FeatureBlockProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    title: string;
    description: string;
    imagePath: string;
};

export const FeatureBlock: React.FC<FeatureBlockProps> = ({ title, description, imagePath, ...props }) => (
    <section
        className="block w-full max-w-md overflow-hidden p-7 md:bg-white-300 2xl:max-w-[20rem] 4xl:max-w-md 4xl:p-10"
        {...props}
    >
        <Image src={imagePath} width={24} height={24} alt="icon" />
        <h4 className="my-2 font-title text-xl 2xl:text-lg 4xl:text-2xl">{title}</h4>
        <p className="text-md w-full break-words 4xl:text-lg">{description}</p>
    </section>
);
