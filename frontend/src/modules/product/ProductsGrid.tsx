import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { Product } from "@type/Product";
import { Button } from "@ui/Button";
import { ProductCard } from "@modules/product/ProductCard";

export type ProductsGridProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    products: Array<Product>;
};

export const ProductsGrid: React.FC<ProductsGridProps> = ({ products }) => (
    <div className="w-full py-12 md:w-3/4">
        <div className="grid grid-cols-2 justify-items-center gap-y-4 md:grid-cols-3 md:justify-items-start md:gap-x-8 md:gap-y-12">
            {products.length > 0 &&
                products.map((product) => (
                    <ProductCard
                        key={product.id}
                        productId={product.id}
                        title={product.name}
                        price={product.price}
                        imagePath={product.photos[0]}
                    />
                ))}
        </div>
        <div className="mt-6 flex w-full justify-center px-3 md:mt-12 md:px-0">
            <Button color="secondary" className="w-full md:w-1/12">
                Plus
            </Button>
        </div>
    </div>
);
