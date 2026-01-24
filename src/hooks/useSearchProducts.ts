import { useMemo } from "react";
import { useSearchParams } from "react-router";
import products, { Product } from "../../database/product";

type FilterFunction = (products: Product[], paramValue: string | null) => Product[] | Product | null;

interface UseSearchProductsOptions {
    paramName: string;
    filterFn: FilterFunction;
}

export function useSearchProducts<T = Product[] | Product | null>({ paramName, filterFn }: UseSearchProductsOptions): T {
    const [searchParams] = useSearchParams();
    const paramValue = searchParams.get(paramName);
   
    const result = useMemo(() => {
        return filterFn(products, paramValue);
    }, [paramValue, filterFn]);

    return result as T;
}
