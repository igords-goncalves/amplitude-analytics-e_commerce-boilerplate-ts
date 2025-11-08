import { Product } from "../../database/product";
import { AddToCartButton } from "../feature/AddToCartButton";
import { ExperimentWrapper } from "../feature/ExperimentWrapper";

export function ProductCard({ product }: { product: Product }) {
    return (
        <div className="flex flex-col justify-between gap-4 p-4 border rounded-lg">
            <div>
                <h2 className="font-bold">{product.nome}</h2>
                <p>{product.descricao}</p>
                <span className="text-lg font-semibold">R${product.preco}</span>
            </div>
            <div className="flex items-center justify-between">
                <ExperimentWrapper />
                <AddToCartButton product={product} />
            </div>
        </div>
    );
}
