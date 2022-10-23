import Image from "next/future/image";
import { useRouter } from "next/router";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";

export type ProductCardProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    productId: number;
    title: string;
    price: number;
    imagePath: string;
};

export const ProductCard: React.FC<ProductCardProps> = ({ productId, title, price, imagePath }) => {
    const router = useRouter();

    return (
        <section
            className="flex flex-col cursor-pointer hover:scale-105 transition duration-300 ease-in-out"
            onClick={() => router.push(`/product/${productId}`)}
            onKeyPress={() => router.push(`/product/${productId}`)}
            role="button"
            tabIndex={0}
        >
            <div className="w-36 h-48 md:w-96 md:h-[30rem] 2xl:w-64 2xl:h-80 4xl:w-96 4xl:h-[30rem] relative self-center">
                <Image src={imagePath} alt="" fill />
            </div>
            <div className="flex flex-col gap-2 mt-4 max-w-[9rem] md:max-w-[24rem]">
                <h4 className="font-title text-lg md:text-2xl">{title}</h4>
                <p className="text-lg mb-3 md:mb-0 md:text-xl">{price}€</p>
            </div>
        </section>
    );
};
