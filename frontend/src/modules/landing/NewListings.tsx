import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { Product } from "@type/Product";
import { ProductCard } from "@modules/product/ProductCard";

export type NewListingsProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  newestProducts: Array<Product>;
};

export const NewListings: React.FC<NewListingsProps> = ({ newestProducts }) => (
  <section className="flex w-full flex-col px-7 py-10 md:px-28 2xl:py-10 4xl:py-16">
    <h2 className="font-title text-3xl md:text-4xl">Nouveaux produits</h2>
    <div className="my-10 flex w-full flex-wrap items-center justify-center gap-7 sm:w-4/6 md:gap-20 lg:w-full">
      {newestProducts.map((product: Product) => (
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
  </section>
);
