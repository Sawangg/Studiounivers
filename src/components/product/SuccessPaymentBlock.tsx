import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@ui/Button";

export type SuccessPaymentBlockProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  sessionId: string;
};

export const SuccessPaymentBlock: React.FC<SuccessPaymentBlockProps> = ({ sessionId }) => {
  console.log(sessionId);
  const router = useRouter();

  return (
    <section className="my-16 flex flex-col items-center justify-center gap-4">
      <div className="mr-5">
        <Image src="/assets/delivery.gif" width={110} height={90} alt="" />
      </div>
      <h1 className="text-3xl">Merci !</h1>
      <p className="text-lg">
        Votre commande <span className="font-bold">#12345</span> est en cours de préparation.
      </p>
      <Button className="mt-2 w-60" onClick={() => router.push("/profile")}>
        Suivre ma commande
      </Button>
    </section>
  );
};
