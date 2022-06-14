import Image from "next/image";
import { useRouter } from "next/router";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { Button } from "../../ui/Button";

export const CartBlock: React.FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = () => {
    const router = useRouter();

    return (
        <div className="w-full bg-white-100 px-40 pt-16 pb-10">
            <h1 className="text-5xl mb-10 mt-4">Votre panier</h1>
            {/* Do not display if empty */}
            <div className="w-full flex flex-col">
                <div className="flex flex-row my-3">
                    <h6 className="font-display text-base w-3/5">Produits</h6>
                    <h6 className="font-display text-base w-1/5">Quantité</h6>
                    <h6 className="font-display text-base text-right w-1/5">Total</h6>
                </div>
                <hr className="w-full bg-white-600 border-none h-[1px]" />

                {/* Loop ici */}
                <div className="flex flex-row py-6">
                    <div className="w-3/5 flex flex-row items-center gap-7">
                        <div className="w-[8rem] h-[12rem] relative cursor-pointer" onClick={() => router.push(`/`)}>
                            <Image src="/assets/product1.png" layout="fill" title="product title" alt="productImg" />
                        </div>
                        <div className="w-1/3">
                            <h4 className="text-2xl font-display my-2">Graystone vase</h4>
                            <p className="text-base my-2">A timeless ceramic vase with  a tri color grey glaze.</p>
                            <p className="text-lg my-2">10€</p>
                        </div>
                    </div>
                    <div className="w-1/5">
                        <p className="text-lg">1</p>
                    </div>
                    <div className="w-1/5">
                        <p className="text-lg text-right">10€</p>
                    </div>
                </div>

                <hr className="w-full bg-white-600 border-none h-[1px] mt-2" />
            </div>
            <div className="w-full flex flex-col items-end mt-8">
                <div className="w-1/4 flex flex-col items-end">
                    <div className="flex items-center gap-4">
                        <h4 className="text-2xl text-white-500">Total</h4>
                        <h3 className="text-3xl">210€</h3>
                    </div>
                    <p className="text-base my-4 text-white-500">Taxes et coût de livraison calculé lors de la commande</p>
                    <Button color="primary">Commander</Button>
                </div>
            </div>

            <div></div>
        </div>
    );
};
