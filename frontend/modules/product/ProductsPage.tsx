import Image from "next/image";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { Product } from "../../types/Product";
import { Button } from "../../ui/Button";
import { Checkbox } from "../../ui/Checkbox";
import { ProductCard } from "./ProductCard";

export type ProductPageProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    products: Array<Product>
};

export const ProductsPage: React.FC<ProductPageProps> = ({ products }) => (
    <>
        <div className="w-full">
            <div className="h-[7rem] md:h-[18rem] relative flex justify-center items-center md:block">
                <Image src="/assets/header.png" layout="fill" alt="header" className="-z-50 select-none" />
                <h1 className="font-title md:absolute md:bottom-9 md:pl-24 text-3xl md:text-5xl text-white z-40">Tous les produits</h1>
            </div>
        </div>
        <div className="w-full flex flex-col md:flex-row px-4 md:px-16">
            <div className="hidden w-1/4 md:flex flex-col p-10 gap-16">
                <div className="flex flex-col gap-2">
                    <h5 className="font-title text-lg my-4">Types de produits</h5>
                    <Checkbox label="Eclairage" />
                    <Checkbox label="Accessoires" />
                    <Checkbox label="Modificateurs" />
                    <Checkbox label="Arrière-fond" />
                    <Checkbox label="Lampes" />
                    <Checkbox label="Appareils Photo" />
                    <Checkbox label="Strobist" />
                </div>
                <div className="flex flex-col gap-2">
                    <h5 className="font-title text-lg my-4">Prix</h5>
                    <Checkbox label="0 - 100" />
                    <Checkbox label="101 - 250" />
                    <Checkbox label="250+" />
                </div>
                <div className="flex flex-col gap-2">
                    <h5 className="font-title text-lg my-4">Fournisseurs</h5>
                    <Checkbox label="Disnet" />
                    <Checkbox label="Kiwi" />
                    <Checkbox label="Litra" />
                    <Checkbox label="Meike" />
                </div>
            </div>
            <div className="flex flex-row items-center justify-around mt-6 md:hidden">
                <Button color="secondary" arrow={true} className="w-40">Filtres</Button>
                <Button color="secondary" arrow={true} className="w-40">Trier</Button>
            </div>
            <div className="w-full md:w-3/4 py-12">
                <div className="grid grid-cols-2 md:grid-cols-3 md:gap-x-8 gap-y-4 md:gap-y-12 justify-items-center md:justify-items-start">
                    {products.length > 0 && products.map(product => (
                        <ProductCard
                            key={product.id}
                            productId={product.id}
                            title={product.name}
                            price={product.price}
                            imagePath={product.photos[0]}
                        />
                    ))}
                </div>
                <div className="w-full flex justify-center mt-6 px-3 md:px-0 md:mt-12">
                    <Button color="secondary" className="w-full md:w-1/12">Plus</Button>
                </div>
            </div>
        </div>
    </>
);
