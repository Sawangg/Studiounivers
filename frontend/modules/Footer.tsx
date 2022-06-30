import Image from "next/image";
import { useRouter } from "next/router";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { Input } from "../ui/Input";

export const Footer: React.FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = () => {
    const router = useRouter();

    return (
        <footer className="w-full mt-auto bg-primary-700 sm:flex sm:flex-col sm:justify-center sm:items-center px-4 sm:px-28 text-white">
            <div className="w-full sm:flex sm:flex-row pt-9 pb-5 sm:py-9">
                <div className="w-full sm:w-1/2 flex flex-row flex-wrap sm:flex-nowrap">
                    <div className="w-5/6 leading-loose flex-grow basis-[calc(100%/2)]">
                        <h4 className="font-title text-lg">Menu</h4>
                        <p className="cursor-pointer">Nouveautés</p>
                        <p className="cursor-pointer">Populaire</p>
                        <p className="cursor-pointer">Tous les produits</p>
                    </div>
                    <div className="leading-loose mx-auto flex-grow basis-[calc(100%/2)]">
                        <h4 className="font-title text-lg">Catégories</h4>
                        <p className="cursor-pointer">Eclairages</p>
                        <p className="cursor-pointer">Accessoires</p>
                        <p className="cursor-pointer">Modificateurs</p>
                        <p className="cursor-pointer">Arrière-fond</p>
                        <p className="cursor-pointer">Lampes</p>
                        <p className="cursor-pointer">Appareils Photo</p>
                        <p className="cursor-pointer">Strobist</p>
                    </div>
                    <div className="leading-loose mx-auto flex-grow basis-[calc(100%/2)] my-9">
                        <h4 className="font-title text-lg">Notre entreprise</h4>
                        <p className="cursor-pointer" onClick={() => router.push("/about")}>À propos</p>
                        <p>Contactez-nous</p>
                        <p>Conditions générales</p>
                    </div>
                </div>
                <div className="sm:w-1/2">
                    <Input color="primary" label="Rejoignez notre liste mail" placeholder="votre@mail.com" button="Rejoindre" type="email" />
                </div>
            </div>
            <hr className="w-full text-primary-600 lg:visible md:invisible sm:invisible" />
            <div className="w-full flex flex-row py-6 items-center">
                <p className="text-base mx-auto sm:mx-0">Copyright {new Date().getFullYear().toString()} StudioUnivers</p>
                <div className="hidden sm:flex flex-row ml-auto gap-6">
                    <Image className="cursor-pointer" src="/assets/icons/socials/linkedin.svg" width="24px" height="24px" title="LinkedIn" alt="linkedin" />
                    <Image className="cursor-pointer" src="/assets/icons/socials/facebook.svg" width="24px" height="24px" title="Facebook" alt="facebook" />
                    <Image className="cursor-pointer" src="/assets/icons/socials/instagram.svg" width="24px" height="24px" title="Instagram" alt="instragram" />
                    <Image className="cursor-pointer" src="/assets/icons/socials/twitter.svg" width="24px" height="24px" title="Twitter" alt="twitter" />
                    <Image className="cursor-pointer" src="/assets/icons/socials/pinterest.svg" width="24px" height="24px" title="Pinterest" alt="pinterest" />
                    <a href="https://github.com/Sawangg" target="_blank" rel="noopener noreferrer" className="max-h-[24px]">
                        <Image className="cursor-pointer" src="/assets/icons/socials/github.svg" width="24px" height="24px" title="Créé par Sawangg" alt="github" />
                    </a>
                </div>
            </div>
        </footer>
    );
};
