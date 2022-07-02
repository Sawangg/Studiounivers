import React, { DetailedHTMLProps, HTMLAttributes, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Button } from "../../ui/Button";
import { Stepper } from "../../ui/Stepper";
import { apiEndpoint } from "../../lib/constants";
import { Cart } from "../../types/Cart";
import axios from "axios";

export type CartBlockProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    cart: Cart;
};

export const CartBlock: React.FC<CartBlockProps> = ({ cart }) => {
    const router = useRouter();
    const [currentCart, setCurrentCart] = useState(cart);

    const handleChange = async (productId: number, quantity: number) => {
        try {
            const newProducts = await axios.post(`${apiEndpoint}/api/user/cart/update`, { productId, quantity }, { withCredentials: true });
            setCurrentCart(newProducts.data);
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

    return (
        <div className="w-full bg-white-100 px-40 pt-16 pb-10">
            <h1 className="text-5xl mb-10 mt-4">Votre panier</h1>
            {currentCart && currentCart.productsInCart.length > 0 ?
                <>
                    <div className="w-full flex flex-col">
                        <div className="flex flex-row my-3">
                            <h6 className="font-title text-base w-3/5">Produits</h6>
                            <h6 className="font-title text-base w-1/5">Quantité</h6>
                            <h6 className="font-title text-base text-right w-1/5">Total</h6>
                        </div>
                        <hr className="w-full bg-white-600 border-none h-[1px]" />

                        {currentCart.productsInCart.map(product => (
                            <div key={product.product.id} className="flex flex-row pt-6">
                                <div className="w-3/5 flex flex-row items-center gap-7">
                                    <div className="w-[8rem] h-[12rem] relative cursor-pointer" onClick={() => router.push(`/product/${product.product.id}`)}>
                                        <Image src={product.product.photos[0]} layout="fill" title={product.product.name} alt="productImg" />
                                    </div>
                                    <div className="w-1/3">
                                        <h4 className="text-2xl font-title my-2">{product.product.name}</h4>
                                        <p className="text-base my-2">{product.product.description.slice(0, 100)}...</p>
                                    </div>
                                </div>
                                <div className="w-1/12">
                                    <Stepper
                                        min={0}
                                        max={99}
                                        defaultValue={product.quantity}
                                        onChange={e => updateInputQuantity(product.product.id, +e.target.value)}
                                        onStepperButtonDecrease={() => decreaseQuantity(product.product.id, product.quantity)}
                                        onStepperButtonIncrease={() => increaseQuantity(product.product.id, product.quantity)}
                                    />
                                </div>
                                <div className="flex-grow">
                                    <p className="text-lg text-right">{product.adjustedPrice}€</p>
                                </div>
                            </div>
                        ))}
                        <hr className="w-full bg-white-600 border-none h-[1px] mt-2" />
                    </div>

                    <div className="w-full flex flex-col items-end mt-8">
                        <div className="w-1/4 flex flex-col items-end">
                            <div className="flex items-center gap-4">
                                <h4 className="text-2xl text-white-500">Total</h4>
                                <h3 className="text-3xl">{currentCart.total}€</h3>
                            </div>
                            <p className="text-base my-4 text-white-500">Taxes et coût de livraison calculé lors de la commande</p>
                            <Button color="primary">Commander</Button>
                        </div>
                    </div>
                </>
                :
                <div className="flex flex-col justify-center items-center gap-10">
                    <Image src="/assets/icons/cart_empty.svg" width="110px" height="110px" title="Panier vide" alt="Empty cart" />
                    <p className="text-2xl">Votre panier est vide !</p>
                    <Button color="primary" onClick={() => router.push("/products")}>Voir les produits</Button>
                </div>
            }
        </div>
    );
};
