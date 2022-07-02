import React, { DetailedHTMLProps, HTMLAttributes, useState } from "react";
import Image from "next/image";
import { Button } from "../../ui/Button";
import { Stepper } from "../../ui/Stepper";
import { apiEndpoint } from "../../lib/constants";
import axios from "axios";
import { useRouter } from "next/router";

export type ProductCardProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    productId: number
    title: string;
    description: string;
    price: number;
    imagePath: string;
};

export const ProductBlock: React.FC<ProductCardProps> = ({ productId, title, description, price, imagePath }) => {
    const router = useRouter();
    const [currentQuantity, setCurrentQuantity] = useState<number>(1);

    const addToCart = async () => {
        try {
            await axios.post(`${apiEndpoint}/api/user/cart/add`, { productId, quantity: currentQuantity }, { withCredentials: true });
        } catch (err) {
            if (err.response.status === 400) router.push("/login");
        }
    };

    return (
        <div className="w-full flex flex-row">
            <div className="w-1/2">
                <div className="w-full h-[60rem] relative">
                    <Image src={imagePath} layout="fill" alt="productImg" />
                </div>
            </div>
            <div className="w-1/2 p-24">
                <h1 className="font-title text-5xl">{title}</h1>
                <h3 className="text-3xl">{price}€</h3>
                <div className="mt-20">
                    <h5 className="font-title text-lg mb-4">Description</h5>
                    <p className="text-lg">{description}</p>
                </div>
                <div className="mt-20">
                    <h5 className="font-title text-lg">Dimensions</h5>
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                    <div className="flex flex-row items-center w-1/4">
                        <p className="text-lg mr-6">Quantité :</p>
                        <Stepper
                            defaultValue={1}
                            min={1}
                            max={99}
                            onChange={e => setCurrentQuantity(+e.target.value)}
                            onStepperButtonDecrease={() => setCurrentQuantity(currentQuantity - 1)}
                            onStepperButtonIncrease={() => setCurrentQuantity(currentQuantity + 1)}
                        />
                    </div>
                    <Button onClick={addToCart}>Ajouter au panier</Button>
                </div>
            </div>
        </div>
    );
};
