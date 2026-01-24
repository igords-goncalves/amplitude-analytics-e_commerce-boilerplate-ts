import { Star, Minus, Plus, FileText } from "lucide-react";
import { useState } from "react";
import { Product } from "../../database/product";
import { AddToCartButton } from "../feature/AddToCartButton";
import { PurchaseButton } from "../feature/PurchaseButton";
import { getProductRate } from "../utils/getProductRate";
import { Image } from "./_commons/Image";
import { Button } from "./_commons";

export function ProductInfos(filteredProduct: Product) {
    // Quantity state and handlers
    const [quantity, setQuantity] = useState(1);

    const handleQuantityDecrease = () => {
        setQuantity((prev) => Math.max(1, prev - 1));
    };

    const handleQuantityIncrease = () => {
        if (filteredProduct) {
            setQuantity((prev) => Math.min(filteredProduct.estoque, prev + 1));
        }
    };

    // Calculate rating details
    const rating = getProductRate(filteredProduct);

    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    const totalReviews = filteredProduct.avaliacoes.length;

    function RenderStars() {
        return (
            <div className="flex items-center gap-1 text-yellow-400">
                {[...Array(5)].map((_, index) => {
                    if (index < fullStars) {
                        return (
                            <Star
                                key={index}
                                className="w-5 h-5 fill-current"
                            />
                        );
                    } else if (index === fullStars && hasHalfStar) {
                        return (
                            <Star
                                key={index}
                                className="w-5 h-5 fill-current opacity-50"
                            />
                        );
                    } else {
                        return (
                            <Star
                                key={index}
                                className="w-5 h-5 text-gray-500"
                            />
                        );
                    }
                })}
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="flex items-center justify-center bg-white/5 rounded-xl p-8 aspect-square">
                <Image
                    src={filteredProduct.imagem_url}
                    alt={`${filteredProduct.nome} logo on a dark background`}
                />
            </div>

            <div className="flex flex-col space-y-6">
                <div>
                    <div className="flex items-center gap-3 flex-wrap">
                        <h1 className="text-white text-4xl lg:text-5xl font-black leading-tight tracking-[-0.033em]">
                            {filteredProduct.nome}
                        </h1>
                        <div className="flex h-7 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white/5 px-4">
                            <p className="text-white/80 text-sm font-medium leading-normal">
                                {filteredProduct.categoria}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <RenderStars />
                    <a
                        className="text-[#9b92c9] hover:text-white text-sm font-medium"
                        href="#reviews"
                    >
                        ({totalReviews}{" "}
                        {totalReviews === 1 ? "avaliação" : "avaliações"})
                    </a>
                </div>

                <div className="flex items-center gap-4 text-white">
                    <p className="text-3xl font-bold">
                        R$ {filteredProduct.preco.toFixed(2).replace(".", ",")}
                    </p>
                    <div className="flex items-center gap-2">
                        <span className="relative flex h-2.5 w-2.5">
                            {filteredProduct.estoque > 0 && (
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            )}
                            <span
                                className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                                    filteredProduct.estoque > 0
                                        ? "bg-green-500"
                                        : "bg-red-500"
                                }`}
                            ></span>
                        </span>
                        <span
                            className={`text-sm font-medium ${
                                filteredProduct.estoque > 0
                                    ? "text-green-400"
                                    : "text-red-400"
                            }`}
                        >
                            {filteredProduct.estoque > 0
                                ? "Em Estoque"
                                : "Indisponível"}
                        </span>
                    </div>
                </div>

                <div className="text-white/70 text-base leading-relaxed">
                    <p>{filteredProduct.descricao}</p>
                </div>

                <div className="flex flex-col space-y-4 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center rounded-lg bg-white/5">
                            <Button
                                className="p-2 text-white/50 hover:text-white"
                                onClick={handleQuantityDecrease}
                                data-analytics-event="quantity_decrease"
                                disabled={quantity <= 1}
                            >
                                <Minus className="w-5 h-4" />
                            </Button>
                            <input
                                className="w-12 text-center bg-transparent border-0 text-white focus:ring-0"
                                type="text"
                                value={quantity}
                                readOnly
                            />
                            <Button
                                className="p-2 text-white/50 hover:text-white"
                                onClick={handleQuantityIncrease}
                                data-analytics-event="quantity_increase"
                                disabled={quantity >= filteredProduct.estoque}
                            >
                                <Plus className="w-5 h-4" />
                            </Button>
                        </div>
                        <PurchaseButton />
                    </div>
                    <div className="flex items-center gap-4">
                        <AddToCartButton product={filteredProduct} />
                        
                        <div className="relative group">
                            <a
                                className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 w-9 bg-white/5 text-white hover:bg-white/10 transition-colors"
                                data-analytics-event="docs_link_click"
                                href={filteredProduct.documentacao_url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FileText className="w-5 h-5" />
                            </a>
                            <span className="absolute top-full mb-2 left-1/2 -translate-x-1/2 w-max px-3 py-1.5 text-sm font-medium text-white bg-[#232323] rounded-lg shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                Ver Documentação
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductInfos;
