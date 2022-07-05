import Image from "next/image";
import { useRouter } from "next/router";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { Button } from "../../ui/Button";

export type SuccessPaymentBlockProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    stripeData: any;
};

export const SuccessPaymentBlock: React.FC<SuccessPaymentBlockProps> = ({ stripeData }) => {
    const router = useRouter();

    return (
        <div className="flex flex-col justify-center items-center gap-4 my-16">
            <div className="mr-5">
                <Image src="/assets/delivery.gif" width="110px" height="90px" alt="cart" />
            </div>
            <h1 className="text-3xl">Merci {stripeData.name} !</h1>
            <p className="text-lg">Votre commande <span className="font-bold">#12345</span> est en cours de préparation.</p>
            <Button className="w-60 mt-2" onClick={() => router.push("/profile")}>Suivre ma commande</Button>
        </div>
    );
};
