import Image from "next/image";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { Input } from "../ui/Input";

export const Footer: React.FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = () => (
    <footer className="w-full mt-auto bg-primary-700 flex flex-col justify-center items-center px-28 text-white">
        <div className="w-full flex flex-row py-9">
            <div className="w-1/2 flex flex-row">
                <div className="leading-loose">
                    <h4 className="font-display text-lg">Menu</h4>
                    <p>Nouveautés</p>
                    <p>Populaire cette semaine</p>
                    <p>Tous les produits</p>
                </div>
                <div className="leading-loose mx-auto">
                    <h4 className="font-display text-lg">Catégories</h4>
                    <p className="cursor-pointer">Eclairages</p>
                    <p className="cursor-pointer">Accessoires</p>
                    <p className="cursor-pointer">Modificateurs</p>
                    <p className="cursor-pointer">Arrière-fond</p>
                    <p className="cursor-pointer">Lampes</p>
                    <p className="cursor-pointer">Appareils Photo</p>
                    <p className="cursor-pointer">Strobist</p>
                </div>
                <div className="leading-loose mx-auto">
                    <h4 className="font-display text-lg">Notre entreprise</h4>
                    <p>À propos</p>
                    <p>Contactez-nous</p>
                    <p>Conditions générales</p>
                </div>
            </div>
            <div className="w-1/2">
                <Input color="primary" label="Rejoignez notre liste mail" placeholder="votre@mail.com" button="Rejoindre" type="email" />
            </div>
        </div>
        <hr className="w-full text-primary-600 lg:visible md:invisible sm:invisible" />
        <div className="w-full flex flex-row py-6">
            <p className="text-base">Copyright {new Date().getFullYear().toString()} StudioUnivers</p>
            <div className="flex flex-row ml-auto gap-6">
                <Image src="/assets/icons/socials/linkedin.svg" width="24px" height="24px" title="LinkedIn" alt="linkedin" />
                <Image src="/assets/icons/socials/facebook.svg" width="24px" height="24px" title="Facebook" alt="facebook" />
                <Image src="/assets/icons/socials/instagram.svg" width="24px" height="24px" title="Instagram" alt="instragram" />
                <Image src="/assets/icons/socials/twitter.svg" width="24px" height="24px" title="Twitter" alt="twitter" />
                <Image src="/assets/icons/socials/pinterest.svg" width="24px" height="24px" title="Pinterest" alt="pinterest" />
            </div>
        </div>
    </footer>
);
