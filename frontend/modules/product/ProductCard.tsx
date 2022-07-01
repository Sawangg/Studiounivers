import Image from "next/image";
import { useRouter } from "next/router";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";

export type ProductCardProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    productId: number
    title: string;
    price: number;
    imagePath: string;
};

export const ProductCard: React.FC<ProductCardProps> = ({ productId, title, price, imagePath }) => {
    const router = useRouter();

    return (
        <div className="cursor-pointer hover:scale-105 transition duration-300 ease-in-out"
            onClick={() => router.push(`/product/${productId}`)}
        >
            <div className="w-[9rem] h-[12rem] md:w-[24rem] md:h-[30rem] relative">
                <Image src={imagePath} layout="fill" alt="productImg" />
            </div>
            <div className="flex flex-col gap-2 mt-4">
                <h4 className="font-title text-lg md:text-2xl">{title}</h4>
                <p className="text-lg mb-3 md:mb-0 md:text-xl">{price}€</p>
            </div>
        </div>
    );
};
