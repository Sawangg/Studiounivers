import { getAlsoLikeProducts } from "@api/products/getAlsoLikeProducts";
import { getProduct } from "@api/products/getProduct";
import { Features } from "@modules/landing/Features";
import { AlsoLike } from "@modules/product/AlsoLike";
import { ProductBlock } from "@modules/product/ProductBlock";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    const product = await getProduct(params.id);

    return { title: `StudioUnivers — ${product.name}` };
}

export default async function Page({ params }: { params: { id: string } }) {
    const productPromise = getProduct(params.id);
    const alsoLikeProductsPromise = getAlsoLikeProducts();

    const [product, alsoLikeProducts] = await Promise.all([productPromise, alsoLikeProductsPromise]);

    return (
        <>
            <ProductBlock
                productId={product.id}
                title={product.name}
                price={product.price}
                description={product.description}
                images={product.photos}
            />
            <AlsoLike alsoLikeProducts={alsoLikeProducts} />
            <Features />
        </>
    );
}
