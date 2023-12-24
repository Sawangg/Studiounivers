"use client";

import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
      className="ease-in-out flex cursor-pointer flex-col transition duration-300 hover:scale-105"
      onClick={() => router.push(`/product/${productId}`)}
      onKeyDown={() => router.push(`/product/${productId}`)}
      role="button"
      tabIndex={0}
    >
      <div className="relative h-48 w-36 self-center md:h-[30rem] md:w-96 2xl:h-80 2xl:w-64 4xl:h-[30rem] 4xl:w-96">
        <Image src={imagePath} alt="" fill />
      </div>
      <div className="mt-4 flex max-w-[9rem] flex-col gap-2 md:max-w-[24rem]">
        <h4 className="font-title text-lg md:text-2xl">{title}</h4>
        <p className="mb-3 text-lg md:mb-0 md:text-xl">{price}€</p>
      </div>
    </section>
  );
};
