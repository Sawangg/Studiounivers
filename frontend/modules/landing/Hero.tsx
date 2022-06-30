import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Button } from "../../ui/Button";

export const Hero: React.FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = () => {
    const router = useRouter();

    return (
        <div className="w-full md:px-28 md:py-20 flex flex-row text-white">
            <div className="w-full md:w-3/5 flex flex-col justify-between bg-primary-700 p-7 md:p-16">
                <div className="md:w-[calc(100%-32%)]">
                    <h2 className="font-title text-3xl md:text-4xl">La marque de luxe pour toutes vos créations photos</h2>
                    <p className="md:hidden mt-16">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta pariatur sapiente molestiae placeat suscipit eum possimus, rerum, sit excepturi eveniet sequi. Eveniet excepturi, quas vero alias deserunt earum? Assumenda, molestiae?</p>
                    <Button className="mt-6 w-full md:w-2/6" onClick={() => router.push("/products")}>Voir les produits</Button>
                </div>
                <div className="hidden md:block md:w-5/6">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta pariatur sapiente molestiae placeat suscipit eum possimus, rerum, sit excepturi eveniet sequi. Eveniet excepturi, quas vero alias deserunt earum? Assumenda, molestiae?</p>
                </div>
            </div>
            <div className="hidden md:flex w-2/5 bg-white-100 h-[40rem] max-h-[40rem] min-h-[40rem] justify-center items-center">
                <div className="w-[35rem] h-[30rem] relative">
                    <Image src="/assets/hero.png" layout="fill" alt="heroImg" />
                </div>
            </div>
        </div>
    );
};
