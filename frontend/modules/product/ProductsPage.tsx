import Image from "next/image";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { Product } from "../../styles/types/Product";
import { Button } from "../../ui/Button";
import { Checkbox } from "../../ui/Checkbox";
import { ProductCard } from "./ProductCard";

export type ProductPageProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    products: Array<Product>
};

export const ProductsPage: React.FC<ProductPageProps> = ({ products }) => (
    <>
        <div className="w-full">
            <div className="h-[18rem] relative">
                <Image src="/assets/header.png" layout="fill" alt="header" className="-z-50 select-none" />
                <h1 className="absolute bottom-9 pl-24 text-5xl font-display text-white z-50">Tous les produits</h1>
            </div>
        </div>
        <div className="w-full flex flex-row px-16">
            <div className="w-1/4 flex flex-col p-10 gap-16">
                <div className="flex flex-col gap-2">
                    <h5 className="font-display text-lg my-4">Types de produits</h5>
                    <Checkbox label="Eclairage" />
                    <Checkbox label="Accessoires" />
                    <Checkbox label="Modificateurs" />
                    <Checkbox label="Arrière-fond" />
                    <Checkbox label="Lampes" />
                    <Checkbox label="Appareils Photo" />
                    <Checkbox label="Strobist" />
                </div>
                <div className="flex flex-col gap-2">
                    <h5 className="font-display text-lg my-4">Prix</h5>
                    <Checkbox label="0 - 100" />
                    <Checkbox label="101 - 250" />
                    <Checkbox label="250+" />
                </div>
                <div className="flex flex-col gap-2">
                    <h5 className="font-display text-lg my-4">Fournisseurs</h5>
                    <Checkbox label="Disnet" />
                    <Checkbox label="Kiwi" />
                    <Checkbox label="Litra" />
                    <Checkbox label="Meike" />
                </div>
            </div>
            <div className="w-3/4 py-12">
                <div className="grid grid-cols-3 gap-x-8 gap-y-12 ">
                    {products.map(product => (
                        <ProductCard
                            key={product.id}
                            productId={product.id}
                            title={product.name}
                            price={product.price}
                            imagePath={product.photos[0]}
                        />
                    ))}
                </div>
                <div className="w-full flex justify-center mt-12">
                    <Button color="secondary">Plus</Button>
                </div>
            </div>
        </div>
    </>
);
