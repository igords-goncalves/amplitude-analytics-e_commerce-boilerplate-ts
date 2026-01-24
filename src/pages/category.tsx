import { useMemo } from "react";
import { useSearchParams } from "react-router";
import products, { Product } from "../../database/product";
import { Site } from "../components/layout/Site";
import { Footer, Header, Main } from "../components/template";
import { NavigationMenu } from "../components/NavigationMenu";
import { FooterContent } from "../components/FooterContent";
import { ProductCard } from "../components/ProductCard";

export function CategoryPage() {
    //TODO: remover essa lógica para um custom hook chamado useSearchCategory
    const [searchParams] = useSearchParams();
    const categoryName = searchParams.get("name");

    const filteredProducts = useMemo(() => {
        if (!categoryName) return products;
        return products.filter(
            (product: Product) => product.categoria === categoryName
        );
    }, [categoryName]);

    return (
        <Site>
            <Header>
                <NavigationMenu />
            </Header>
            <Main>
                <section className="container mx-auto my-8">
                    <h1 className="text-3xl font-bold mb-6">
                        {categoryName || "Todos os produtos"}
                    </h1>
                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {filteredProducts.map((product: Product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-gray-400 my-8">
                            Nenhum produto encontrado nesta categoria.
                        </p>
                    )}
                </section>
            </Main>
            <Footer>
                <FooterContent />
            </Footer>
        </Site>
    );
}

export default CategoryPage;
