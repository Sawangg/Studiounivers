import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { Product } from "@type/Product";
import { Button } from "@ui/Button";
import { ProductCard } from "@modules/product/ProductCard";

export type NewListingsProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    newestProducts: Array<Product>;
};

export const NewListings: React.FC<NewListingsProps> = ({ newestProducts }) => {
    const router = useRouter();
    const { t } = useTranslation();

    return (
        <section className="w-full px-7 md:px-28 py-10 2xl:py-10 4xl:py-16 flex flex-col">
            <h2 className="font-title text-3xl md:text-4xl">{t("newlisting.title")}</h2>
            <div className="w-full sm:w-4/6 lg:w-full flex flex-wrap items-center justify-center my-10 gap-7 md:gap-20">
                {newestProducts.map((product) => (
                    <div key={product.id} className="flex-[1_0_45%] self-start md:flex-[0_0_0]">
                        <ProductCard
                            productId={product.id}
                            title={product.name}
                            price={product.price}
                            imagePath={product.photos[0]}
                        />
                    </div>
                ))}
            </div>
            <Button
                className="w-full md:w-60 md:mt-6 self-center"
                color="secondary"
                onClick={() => router.push("/products")}
            >
                {t("newlisting.button")}
            </Button>
        </section>
    );
};
