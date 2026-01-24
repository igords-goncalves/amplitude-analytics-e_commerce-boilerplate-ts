import { useSearchParams } from "react-router";
import { Product } from "../../database/product";
import { Site } from "../components/layout/Site";
import { Footer, Header, Main } from "../components/template";
import { NavigationMenu } from "../components/NavigationMenu";
import { FooterContent } from "../components/FooterContent";
import { ProductCard } from "../components/ProductCard";
import { useSearchCategory } from "../hooks/useSearchCategory";

export function CategoryPage() {
    const [searchParams] = useSearchParams();
    const categoryName = searchParams.get("name");
    
    const filteredProducts = useSearchCategory();

    const sectionTitle =
        filteredProducts
            .map((product) => product.categoria)
            .find((name) => name === categoryName) || "Categoria";


    function Fallback() {
        return (
            <p className="text-center text-gray-400 my-8">
                Nenhum produto encontrado nesta categoria.
            </p>
        );
    }

    return (
        <Site>
            <Header>
                <NavigationMenu />
            </Header>
            <Main>
                <section className="container mx-auto my-8">
                    <h1 className="text-3xl font-bold mb-6">
                        {sectionTitle}
                    </h1>
                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {filteredProducts.map((product: Product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                        </div>
                    ) : (
                        <Fallback />
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
