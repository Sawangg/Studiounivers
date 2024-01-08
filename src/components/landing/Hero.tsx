"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@ui/Button";

export const Hero: React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = () => {
  const router = useRouter();

  return (
    <section className="relative hidden w-full flex-row md:flex">
      <div className="relative h-[50rem] w-full 3xl:h-[60rem]">
        <Image src="/assets/hero2.png" alt="" fill />
      </div>

      <div className="absolute right-28 top-[20%] w-5/12 bg-white p-16">
        <h2 className="font-title text-3xl md:text-4xl">Produit de luxe pour les passionnées de photo</h2>
        <p className="mt-6 text-lg">Achetez dès aujourd&apos;hui dans la nouvelle collection Printemps 2023</p>
        <Button color="secondary" className="mt-36 w-full md:w-2/6" onClick={() => router.push("/products")}>
          Voir la collection
        </Button>
      </div>
    </section>
  );
};
