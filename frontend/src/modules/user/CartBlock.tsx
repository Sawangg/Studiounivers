"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { DetailedHTMLProps, HTMLAttributes, useState } from "react";
import { checkout } from "@lib/checkout";
import { apiEndpoint } from "@lib/constants";
import { Cart } from "@type/Cart";
import { Button } from "@ui/Button";
import { Stepper } from "@ui/Stepper";

export type CartBlockProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    cart: Cart;
};

export const CartBlock: React.FC<CartBlockProps> = ({ cart }) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [currentCart, setCurrentCart] = useState(cart);

    const handleChange = async (productId: number, quantity: number) => {
        try {
            const res = await fetch(`${apiEndpoint}/user/cart/update`, {
                method: "POST",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ productId, quantity }),
            });
            const data = await res.json();
            setCurrentCart(data);
        } catch {
            // Notif here
        }
    };

    const decreaseQuantity = (productId: number, quantity: number) => {
        handleChange(productId, --quantity);
    };

    const increaseQuantity = (productId: number, quantity: number) => {
        handleChange(productId, ++quantity);
    };

    const updateInputQuantity = (productId: number, quantity: number) => {
        if (quantity < 99) handleChange(productId, quantity);
    };

    const handleCheckout = async () => {
        setIsLoading(true);
        await checkout(currentCart.total);
        setIsLoading(false);
    };

    return (
        <section className="w-full bg-white-100 px-5 pb-10 md:px-40 2xl:pt-6 3xl:pt-16">
            <h1 className="mb-4 mt-4 font-title text-2xl md:mb-10 md:text-5xl">Votre panier</h1>
            {currentCart && currentCart.productsInCart.length > 0 ? (
                <>
                    <div className="flex w-full flex-col gap-4 md:gap-0">
                        <div className="my-3 hidden flex-row md:flex">
                            <h6 className="w-3/5 font-title text-base">Produits</h6>
                            <h6 className="w-1/5 font-title text-base">Quantité</h6>
                            <h6 className="w-1/5 text-right font-title text-base">Sous-total</h6>
                        </div>
                        <hr className="hidden h-[1px] w-full border-none bg-white-600 md:block" />

                        {currentCart.productsInCart.map((product) => (
                            <div key={product.product.id} className="flex flex-row md:pt-6">
                                <div className="flex w-full flex-row items-center gap-7 md:w-3/5">
                                    <div
                                        className="relative h-[12rem] w-60 cursor-pointer md:w-[8rem]"
                                        onClick={() => router.push(`/product/${product.product.id}`)}
                                        onKeyDown={() => router.push(`/product/${product.product.id}`)}
                                        role="button"
                                        tabIndex={0}
                                    >
                                        <Image
                                            src={product.product.photos[0]}
                                            title={product.product.name}
                                            alt=""
                                            fill
                                        />
                                    </div>
                                    <div className="w-full md:w-1/3">
                                        <h4 className="my-2 font-title text-xl md:text-2xl">{product.product.name}</h4>
                                        <p className="my-2 hidden text-base md:block">
                                            {product.product.description.slice(0, 100)}...
                                        </p>
                                        <p className="my-2 text-base md:hidden">
                                            {product.product.description.slice(0, 35)}...
                                        </p>
                                        <p className="text-lg md:hidden">{product.adjustedPrice}€</p>
                                        <div className="mt-4 w-36 md:hidden">
                                            <Stepper
                                                min={0}
                                                max={99}
                                                defaultValue={product.quantity}
                                                onChange={(e) =>
                                                    updateInputQuantity(product.product.id, +e.target.value)
                                                }
                                                onStepperButtonDecrease={() =>
                                                    decreaseQuantity(product.product.id, product.quantity)
                                                }
                                                onStepperButtonIncrease={() =>
                                                    increaseQuantity(product.product.id, product.quantity)
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden md:block 2xl:w-36 4xl:w-1/12">
                                    <Stepper
                                        min={0}
                                        max={99}
                                        defaultValue={product.quantity}
                                        onChange={(e) => updateInputQuantity(product.product.id, +e.target.value)}
                                        onStepperButtonDecrease={() =>
                                            decreaseQuantity(product.product.id, product.quantity)
                                        }
                                        onStepperButtonIncrease={() =>
                                            increaseQuantity(product.product.id, product.quantity)
                                        }
                                    />
                                </div>
                                <div className="hidden flex-grow md:block">
                                    <p className="text-right text-lg">{product.adjustedPrice}€</p>
                                </div>
                            </div>
                        ))}
                        <hr className="mt-2 h-[1px] w-full border-none bg-white-600" />
                    </div>

                    <div className="mt-8 flex w-full flex-col items-end">
                        <div className="flex w-full flex-col items-end md:w-1/4">
                            <div className="flex items-center gap-4">
                                <h4 className="text-2xl font-semibold text-white-500">Total</h4>
                                <h3 className="text-3xl">{currentCart.total}€</h3>
                            </div>
                            <p className="my-3 text-right text-base font-light text-white-500">
                                Taxes et coût de livraison calculé lors de la commande
                            </p>
                            <Button
                                color="primary"
                                className="w-full md:w-1/2"
                                loading={isLoading}
                                loadingStyle="w-full md:w-[7.5rem]"
                                onClick={handleCheckout}
                            >
                                Commander
                            </Button>
                        </div>
                    </div>
                </>
            ) : (
                <div className="my-14 flex flex-col items-center justify-center gap-10 md:mt-0 2xl:my-6">
                    <Image
                        src="/assets/icons/cart_empty.svg"
                        width={110}
                        height={110}
                        title="Panier vide"
                        alt="Empty cart"
                    />
                    <p className="text-xl md:text-2xl">Votre panier est vide !</p>
                    <Button color="primary" onClick={() => router.push("/products")}>
                        Voir les produits
                    </Button>
                </div>
            )}
        </section>
    );
};
