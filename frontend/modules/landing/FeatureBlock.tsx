import Image from "next/image";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";

export type FeatureBlockProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    title: string;
    description: string;
    imagePath: string;
};

export const FeatureBlock: React.FC<FeatureBlockProps> = ({ title, description, imagePath, ...props }) => (
    <div className="w-full block max-w-md p-7 md:p-10 overflow-hidden md:bg-white-300" {...props}>
        <Image src={imagePath} width="24px" height="24px" alt="icon" />
        <h4 className="font-title text-xl md:text-2xl my-2">{title}</h4>
        <p className="w-full text-md md:text-lg break-words">{description}</p>
    </div>
);
