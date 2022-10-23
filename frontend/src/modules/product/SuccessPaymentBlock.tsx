import Image from "next/future/image";
import { useRouter } from "next/router";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { Button } from "@ui/Button";

export type SuccessPaymentBlockProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    sessionId: string;
};

export const SuccessPaymentBlock: React.FC<SuccessPaymentBlockProps> = ({ sessionId }) => {
    console.log(sessionId);
    const router = useRouter();

    return (
        <section className="flex flex-col justify-center items-center gap-4 my-16">
            <div className="mr-5">
                <Image src="/assets/delivery.gif" width={110} height={90} alt="cart" />
            </div>
            <h1 className="text-3xl">Merci Léo !</h1>
            <p className="text-lg">
                Votre commande <span className="font-bold">#12345</span> est en cours de préparation.
            </p>
            <Button className="w-60 mt-2" onClick={() => router.push("/profile")}>
                Suivre ma commande
            </Button>
        </section>
    );
};
