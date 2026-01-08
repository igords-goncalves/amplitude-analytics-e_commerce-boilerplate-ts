import { Star } from "lucide-react";
import { Product } from "../../database/product";
import { AddToCartButton } from "../feature/AddToCartButton";
import { PurchaseButton } from "../feature/PurchaseButton";
import { Image } from "./_commons";
import { getProductRate } from "../utils/getProductRate";

export function ProductCard({ product }: { product: Product }) {
    return (
        <div className="flex flex-col justify-between gap-4 p-4  bg-[#232323] rounded-lg">
            <Image
                src={product.imagem_url}
                alt={product.nome}
                className="mx-auto"
            />
            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <a href="#">
                        <h2 className="font-bold hover:underline hover:text-blue-500">
                            {product.nome}
                        </h2>
                    </a>
                    <p className="flex gap-2 items-center text-neutral-400 text-sm">
                        <Star size={12} color="#ff0" />
                        {getProductRate(product).toFixed(1)}
                    </p>
                </div>
                <p className="font-normal text-sm text-neutral-400">
                    {product.descricao}
                </p>
                <span className="text-xl font-semibold text-neutral-200">
                    R${product.preco}
                </span>
            </div>
            <div className="flex items-center gap-4 justify-between">
                <PurchaseButton />
                <AddToCartButton product={product} />
            </div>
        </div>
    );
}
