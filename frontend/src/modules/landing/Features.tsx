import { useTranslation } from "next-i18next";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { FeatureBlock } from "@modules/landing/FeatureBlock";

export const Features: React.FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = () => {
    const { t } = useTranslation();

    return (
        <section className="flex w-full flex-col py-10 md:px-10 2xl:py-10 4xl:py-24">
            <h3 className="mx-5 mb-6 font-title text-2xl md:mx-auto md:mb-8 md:text-3xl">{t("features.title")}</h3>
            <div className="flex flex-col justify-around md:flex-row">
                <FeatureBlock
                    title={t("features.delivery.title")}
                    description={t("features.delivery.description")}
                    imagePath="/assets/icons/delivery.svg"
                />
                <FeatureBlock
                    title={t("features.advantages.title")}
                    description={t("features.advantages.description")}
                    imagePath="/assets/icons/rounded_checkmark.svg"
                />
                <FeatureBlock
                    title={t("features.price.title")}
                    description={t("features.price.description")}
                    imagePath="/assets/icons/purchase.svg"
                />
                <FeatureBlock
                    title={t("features.ecological.title")}
                    description={t("features.ecological.description")}
                    imagePath="/assets/icons/sprout.svg"
                />
            </div>
        </section>
    );
};
