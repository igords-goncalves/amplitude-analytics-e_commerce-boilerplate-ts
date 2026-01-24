import { Product } from "../../database/product";
import { useSearchProducts } from "./useSearchProducts";

export function useSearchCategory() {
    return useSearchProducts<Product[]>({
        paramName: "name",
        filterFn: (products, categoryName) => {
            if (!categoryName) return products;
            return products.filter((product: Product) => product.categoria === categoryName);
        }
    });
}
