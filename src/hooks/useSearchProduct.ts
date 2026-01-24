import { Product } from "../../database/product";
import { useSearchProducts } from "./useSearchProducts";

export function useSearchProduct() {
    return useSearchProducts<Product | null>({
        paramName: "id",
        filterFn: (products, productId) => {
            if (!productId) return null;
            return products.find((product: Product) => +product.id === +productId) || null;
        }
    });
}
