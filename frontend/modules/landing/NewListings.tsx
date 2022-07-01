import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { useRouter } from "next/router";
import { Button } from "../../ui/Button";
import { ProductCard } from "../product/ProductCard";
import { Product } from "../../types/Product";

export type NewListingsProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    newestProducts: Array<Product>;
};

export const NewListings: React.FC<NewListingsProps> = ({ newestProducts }) => {
    const router = useRouter();

    return (
        <div className="w-full px-7 md:px-28 py-10 md:py-16 flex flex-col">
            <h2 className="font-title text-3xl md:text-4xl">Nouveaux produits</h2>
            <div className="w-full sm:w-4/6 lg:w-full flex flex-wrap items-center justify-center my-10 gap-7 md:gap-20">
                {newestProducts.map(product => (
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
            <Button className="w-full md:w-60 md:mt-6 self-center" color="secondary" onClick={() => router.push("/products")}>Voir les produits</Button>
        </div>
    );
};
