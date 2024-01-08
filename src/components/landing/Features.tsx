import { FeatureBlock } from "./FeatureBlock";

export const Features: React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = () => (
  <section className="flex w-full flex-col py-10 md:px-10 2xl:py-10 4xl:py-24">
    <h3 className="mx-5 mb-6 font-title text-2xl md:mx-auto md:mb-8 md:text-3xl">
      Ce qui rend notre marque différente
    </h3>
    <div className="flex flex-col justify-around md:flex-row">
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
  </section>
);
