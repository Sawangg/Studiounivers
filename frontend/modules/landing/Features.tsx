import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { FeatureBlock } from "./FeatureBlock";

export const Features: React.FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = () => (
    <div className="w-full flex flex-col px-10 py-24">
        <h3 className="font-title text-3xl mx-auto mb-8">Ce qui rend notre marque différente</h3>
        <div className="flex flex-row justify-around">
            <FeatureBlock
                title="Livraison rapide"
                description="Notre entreprise s'engage à vous livrer vos produits dans des temps compétitifs"
                imagePath="/assets/icons/delivery.svg"
            />
            <FeatureBlock
                title="Des produits avantageux"
                description="Nos produits feront la différence dans vos créations"
                imagePath="/assets/icons/rounded_checkmark.svg"
            />
            <FeatureBlock
                title="Des prix imbattables"
                description="Un catalogue complet avec des prix attractifs"
                imagePath="/assets/icons/purchase.svg"
            />
            <FeatureBlock
                title="Une pensée pour la planète"
                description="Nos actions de la réception de votre commande à son envoi sont pensées pour minimiser l'empreinte carbone"
                imagePath="/assets/icons/sprout.svg"
            />
        </div>
    </div>
);
