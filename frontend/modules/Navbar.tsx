import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export const Navbar: React.FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = () => {
    const router = useRouter();

    return (
        <nav className="w-full bg-white flex flex-col justify-center items-center">
            <div className="w-full flex flex-row items-center py-3 px-10">
                <Image src="/assets/icons/search.svg" width="20px" height="20px" alt="search" className="cursor-pointer" title="Rechercher" />
                <h2 className="text-3xl mx-auto cursor-pointer" title="StudioUnivers - Accueil" onClick={() => router.push("/")}>StudioUnivers</h2>
                <div className="flex flex-row">
                    <div className="mr-5">
                        <Image src="/assets/icons/cart.svg" width="20px" height="20px" alt="cart" className="cursor-pointer" title="Votre panier"
                            onClick={() => router.push("/cart")} />
                    </div>
                    <Image src="/assets/icons/user.svg" width="20px" height="20px" alt="user" className="cursor-pointer" title="Mon profil" />
                </div>
            </div>
            <hr className="w-[calc(100%-3.5rem)] text-white-200 lg:visible md:invisible sm:invisible" />
            <div className="w-full flex justify-center py-3 lg:visible md:invisible sm:invisible">
                <div className="w-4/6 flex flex-row text-lg items-center justify-around text-white-400">
                    <p className="cursor-pointer" onClick={() => router.push("/products")}>Eclairages</p>
                    <p className="cursor-pointer" onClick={() => router.push("/products")}>Accessoires</p>
                    <p className="cursor-pointer" onClick={() => router.push("/products")}>Modificateurs</p>
                    <p className="cursor-pointer" onClick={() => router.push("/products")}>Arrière-fond</p>
                    <p className="cursor-pointer" onClick={() => router.push("/products")}>Lampes</p>
                    <p className="cursor-pointer" onClick={() => router.push("/products")}>Appareils Photo</p>
                    <p className="cursor-pointer" onClick={() => router.push("/products")}>Strobist</p>
                </div>
            </div>
        </nav>
    );
};
