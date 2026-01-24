import { Site } from "../components/layout/Site";
import { Footer, Header, Main } from "../components/template";
import { NavigationMenu } from "../components/NavigationMenu";
import { FooterContent } from "../components/FooterContent";
import ProductInfos from "../components/ProductInfos";
import { useSearchProduct } from "../hooks/useSearchProduct";

export function ProductPage() {
    const filteredProduct = useSearchProduct();

    function Fallback() {
        return (
            <>
                <h1 className="text-3xl font-bold mb-6">Página de Produto</h1>
                <p className="text-center text-gray-400 my-8">
                    Produto não encontrado.
                </p>
            </>
        );
    }

    return (
        <Site>
            <Header>
                <NavigationMenu />
            </Header>
            <Main>
                <section className="container mx-auto my-8 px-4">
                    {filteredProduct ? (
                        <ProductInfos {...filteredProduct} />
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

export default ProductPage;
