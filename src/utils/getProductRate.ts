import { Product } from "../../database/product";

export function getProductRate(products: Product): number {
    if (products.avaliacoes.length === 0) {
        return 0;
    } 
    
    const totalRate = products.avaliacoes
        .map((avaliacao) => avaliacao.nota)
        .reduce((a, b) => a + b, 0);
    return totalRate / products.avaliacoes.length;
}