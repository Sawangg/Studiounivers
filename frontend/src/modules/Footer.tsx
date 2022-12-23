import Image from "next/image";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { Input } from "@ui/Input";
import Link from "next/link";

export const Footer: React.FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = () => {
    return (
        <footer className="mt-auto w-full bg-primary-700 px-4 text-white sm:flex sm:flex-col sm:items-center sm:justify-center sm:px-28">
            <div className="w-full pt-9 pb-5 sm:flex sm:flex-row sm:py-9">
                <div className="flex w-full flex-row flex-wrap sm:w-1/2 sm:flex-nowrap">
                    <div className="w-5/6 flex-grow basis-[calc(100%/2)] leading-loose">
                        <h4 className="font-title text-lg">Menu</h4>
                        <p className="cursor-pointer">Nouveautés</p>
                        <p className="cursor-pointer">Populaire</p>
                        <Link href="/products">Tous les produits</Link>
                    </div>
                    <div className="mx-auto flex-grow basis-[calc(100%/2)] leading-loose">
                        <h4 className="font-title text-lg">Catégories</h4>
                        <Link href="/products">Eclairages</Link>
                        <br />
                        <Link href="/products">Accessoires</Link>
                        <br />
                        <Link href="/products">Modificateurs</Link>
                        <br />
                        <Link href="/products">Arrière-fond</Link>
                        <br />
                        <Link href="/products">Lampes</Link>
                        <br />
                        <Link href="/products">Appareils Photo</Link>
                        <br />
                        <Link href="/products">Strobist</Link>
                    </div>
                    <div className="mx-auto flex-grow basis-[calc(100%/2)] leading-loose 2xl:my-0">
                        <h4 className="font-title text-lg">Notre entreprise</h4>
                        <Link href="/about">À propos</Link>
                        <p>Contactez-nous</p>
                        <p>Conditions générales</p>
                    </div>
                </div>
                <div className="sm:w-1/2 md:mt-2">
                    <Input
                        color="primary"
                        label="Rejoignez notre liste mail"
                        placeholder="votre@mail.com"
                        button="Rejoindre"
                        type="email"
                    />
                </div>
            </div>
            <hr className="w-full text-primary-600 sm:invisible md:invisible lg:visible" />
            <div className="flex w-full flex-row items-center py-6">
                <p className="mx-auto text-base sm:mx-0">
                    Copyright {new Date().getFullYear().toString()} StudioUnivers
                </p>
                <div className="ml-auto hidden flex-row gap-6 sm:flex">
                    <Image
                        className="cursor-pointer"
                        src="/assets/icons/socials/linkedin.svg"
                        width={24}
                        height={24}
                        title="LinkedIn"
                        alt="linkedin"
                    />
                    <Image
                        className="cursor-pointer"
                        src="/assets/icons/socials/facebook.svg"
                        width={24}
                        height={24}
                        title="Facebook"
                        alt="facebook"
                    />
                    <Image
                        className="cursor-pointer"
                        src="/assets/icons/socials/instagram.svg"
                        width={24}
                        height={24}
                        title="Instagram"
                        alt="instragram"
                    />
                    <Image
                        className="cursor-pointer"
                        src="/assets/icons/socials/twitter.svg"
                        width={24}
                        height={24}
                        title="Twitter"
                        alt="twitter"
                    />
                    <Image
                        className="cursor-pointer"
                        src="/assets/icons/socials/pinterest.svg"
                        width={24}
                        height={24}
                        title="Pinterest"
                        alt="pinterest"
                    />
                    <a
                        href="https://github.com/Sawangg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="max-h-[24px]"
                    >
                        <Image
                            className="cursor-pointer"
                            src="/assets/icons/socials/github.svg"
                            width={24}
                            height={24}
                            title="Créé par Sawangg"
                            alt="github"
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
};
