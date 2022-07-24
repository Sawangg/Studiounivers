import { useTranslation } from "next-i18next";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { FeatureBlock } from "@modules/landing/FeatureBlock";

export const Features: React.FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = () => {
    const { t } = useTranslation();

    return (
        <div className="w-full flex flex-col md:px-10 py-10 2xl:py-10 4xl:py-24">
            <h3 className="font-title text-2xl md:text-3xl mb-6 md:mb-8 mx-5 md:mx-auto">{t("features.title")}</h3>
            <div className="flex flex-col md:flex-row justify-around">
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
        </div>
    );
};
