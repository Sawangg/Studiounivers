import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { Product } from "@type/Product";
import { ProductCard } from "@modules/product/ProductCard";

export type AlsoLikeProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  alsoLikeProducts: Array<Product>;
};

export const AlsoLike: React.FC<AlsoLikeProps> = ({ alsoLikeProducts }) => {
  return (
    <section className="flex w-full flex-col px-7 py-10 md:px-28 md:py-16">
      <h2 className="font-title text-3xl md:text-4xl">Vous aimerez peut-être</h2>
      <div className="my-10 flex w-full flex-wrap items-center justify-center gap-7 sm:w-4/6 md:gap-20 lg:w-full">
        {alsoLikeProducts.map((product) => (
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
};
