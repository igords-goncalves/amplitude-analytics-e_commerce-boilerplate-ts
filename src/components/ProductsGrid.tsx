import products, { Product } from "../../database/product";
import { ProductCard } from "./ProductCard";

export function ProductsGrid() {
    return (
        <section className="container grid grid-cols-4 gap-4 mx-auto my-3 site-products-grid">
            <h2 className="col-span-4 text-lg font-bold">Mais vendidos</h2>
            {products.map((product: Product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </section>
    );
}