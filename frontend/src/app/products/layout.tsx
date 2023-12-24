import Image from "next/image";
import { Button } from "@ui/Button";
import { Checkbox } from "@ui/Checkbox";

type ProductsLayoutProps = {
  children: React.ReactNode;
};

export default function ProductsLayout({ children }: ProductsLayoutProps) {
  return (
    <>
      <div className="w-full">
        <div className="relative flex h-[7rem] items-center justify-center md:block md:h-[18rem]">
          <Image src="/assets/header.png" alt="" className="-z-50 select-none" fill />
          <h1 className="z-40 font-title text-3xl text-white md:absolute md:bottom-9 md:pl-24 md:text-5xl">
            Tous les produits
          </h1>
        </div>
      </div>

      <div className="flex w-full flex-col px-4 md:flex-row md:px-16">
        <div className="hidden w-1/4 flex-col gap-16 p-10 md:flex">
          <div className="flex flex-col gap-2">
            <h5 className="my-4 font-title text-lg">Types de produits</h5>
            <Checkbox label="Eclairage" />
            <Checkbox label="Accessoires" />
            <Checkbox label="Modificateurs" />
            <Checkbox label="Arrière-fond" />
            <Checkbox label="Lampes" />
            <Checkbox label="Appareils Photo" />
            <Checkbox label="Strobist" />
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="my-4 font-title text-lg">Prix</h5>
            <Checkbox label="0 - 100" />
            <Checkbox label="101 - 250" />
            <Checkbox label="250+" />
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="my-4 font-title text-lg">Fournisseurs</h5>
            <Checkbox label="Disnet" />
            <Checkbox label="Kiwi" />
            <Checkbox label="Litra" />
            <Checkbox label="Meike" />
          </div>
        </div>
        <div className="mt-6 flex flex-row items-center justify-around md:hidden">
          <Button color="secondary" arrow={true} className="w-40">
            Filtres
          </Button>
          <Button color="secondary" arrow={true} className="w-40">
            Trier
          </Button>
        </div>
        {children}
      </div>
    </>
  );
}
