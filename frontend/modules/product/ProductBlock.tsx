import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import Image from "next/image";
import { Button } from "../../ui/Button";

export type ProductCardProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    productId: number
    title: string;
    description: string;
    price: number;
    imagePath: string;
};

export const ProductBlock: React.FC<ProductCardProps> = ({ productId, title, description, price, imagePath }) => (
    <div className="w-full flex flex-row bg-white-300">
        <div className="w-1/2">
            <div className="w-full h-[60rem] relative">
                <Image src={imagePath} layout="fill" alt="productImg" />
            </div>
        </div>
        <div className="w-1/2 p-24">
            <h1 className="font-display text-5xl">{title}</h1>
            <h3 className="text-3xl">{price}€</h3>
            <h5 className="font-display text-lg">Description</h5>
            <p className="text-lg">{description}</p>
            <h5 className="font-display text-lg">Dimensions</h5>
            <div className="flex flex-row items-center">
                <p className="text-lg">Quantité</p>
                <Button>Ajouter au panier</Button>
            </div>
        </div>
    </div>
);
