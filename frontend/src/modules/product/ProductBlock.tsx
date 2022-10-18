import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { DetailedHTMLProps, HTMLAttributes, useState } from "react";
import checkout from "@lib/checkout";
import { apiEndpoint } from "@lib/constants";
import { Button } from "@ui/Button";
import { Stepper } from "@ui/Stepper";

export type ProductCardProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    productId: number;
    title: string;
    description: string;
    price: number;
    imagePath: string;
};

export const ProductBlock: React.FC<ProductCardProps> = ({ productId, title, description, price, imagePath }) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState({ cart: false, oneClick: false });
    const [currentQuantity, setCurrentQuantity] = useState<number>(1);

    const addToCart = async () => {
        setIsLoading({ ...isLoading, cart: true });
        try {
            await axios.post(
                `${apiEndpoint}/api/user/cart/add`,
                { productId, quantity: currentQuantity },
                { withCredentials: true },
            );
            setIsLoading({ ...isLoading, cart: false });
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
            setIsLoading({ ...isLoading, cart: false });
            if (err.response.status === 400) router.push("/login");
        }
    };

    const handleCheckout = async () => {
        setIsLoading({ ...isLoading, oneClick: true });
        try {
            await axios.get(`${apiEndpoint}/api/auth`, { withCredentials: true });
            await checkout(price * currentQuantity);
            setIsLoading({ ...isLoading, oneClick: false });
        } catch {
            router.push("/login");
            setIsLoading({ ...isLoading, oneClick: false });
        }
    };

    return (
        <section className="w-full flex flex-col md:flex-row">
            <div className="w-full 2xl:w-5/12 4xl:w-5/12 2xl:px-16 4xl:px-28 md:py-10">
                <div className="w-full h-[30rem] 2xl:h-[40rem] 4xl:h-[55rem] relative">
                    <Image src={imagePath} layout="fill" alt="productImg" />
                </div>
            </div>
            <div className="w-full md:w-1/2 pt-10 px-6 2xl:p-16 4xl:p-24">
                <h1 className="font-title text-3xl md:text-5xl">{title}</h1>
                <h3 className="text-2xl font-bold md:text-3xl">{price}€</h3>
                <div className="mt-8 2xl:mt-14 4xl:mt-20">
                    <h5 className="font-title font-semibold text-xl mb-4">Description</h5>
                    <p className="text-base md:text-lg">‟ {description} ”</p>
                </div>
                <div className="my-8 2xl:my-10 4xl:my-16">
                    <h5 className="font-title font-semibold text-xl">Dimensions</h5>
                    <div className="grid grid-cols-3 gap-6 w-full 2xl:w-7/12 4xl:w-1/3 mt-6">
                        <div className="flex flex-col gap-4">
                            <h6 className="font-title">Hauteur</h6>
                            <p>110cm</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h6 className="font-title">Largeur</h6>
                            <p>75cm</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h6 className="font-title">Profondeur</h6>
                            <p>50cm</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col 4xl:flex-row items-center 2xl:items-start 4xl:items-center 4xl:justify-between w-full">
                    <div className="flex flex-row items-center gap-6 md:gap-10">
                        <p className="text-lg w-24">Quantité :</p>
                        <div className="flex flex-row items-center max-w-[10rem]">
                            <Stepper
                                defaultValue={1}
                                min={1}
                                max={99}
                                onChange={(e) => setCurrentQuantity(+e.target.value)}
                                onStepperButtonDecrease={() => setCurrentQuantity(currentQuantity - 1)}
                                onStepperButtonIncrease={() => setCurrentQuantity(currentQuantity + 1)}
                            />
                        </div>
                    </div>
                    <div className="4xl:justify-end w-full flex flex-col md:flex-row gap-6 4xl:gap-10 my-10 4xl:my-0 md:mb-0">
                        <Button
                            className="w-full md:w-28"
                            loading={isLoading.cart}
                            loadingStyle="w-full md:w-40"
                            onClick={addToCart}
                        >
                            Ajouter au panier
                        </Button>
                        <Button
                            className="w-full md:w-28"
                            color="secondary"
                            loading={isLoading.oneClick}
                            loadingStyle="w-full md:w-40"
                            onClick={handleCheckout}
                        >
                            Acheter en un click
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
