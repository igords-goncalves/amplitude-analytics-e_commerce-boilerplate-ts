import { useMemo, useState } from "react";
import { useSearchParams } from "react-router";
import products, { Product } from "../../database/product";
import { Site } from "../components/layout/Site";
import { Footer, Header, Main } from "../components/template";
import { NavigationMenu } from "../components/NavigationMenu";
import { FooterContent } from "../components/FooterContent";
import { Image } from "../components/_commons/Image";
import { AddToCartButton } from "../feature/AddToCartButton";
import { PurchaseButton } from "../feature/PurchaseButton";
import { getProductRate } from "../utils/getProductRate";
import { Star, Minus, Plus, FileText, ShoppingCart } from "lucide-react";
import ProductInfos from "../components/ProductInfos";

export function ProductPage() {
    const [searchParams] = useSearchParams();
    const productId = searchParams.get("id");
   
    const filteredProduct = useMemo(() => {
        if (!productId) return null;

        return (
            products.find((product: Product) => +product.id === +productId) ||
            null
        );
    }, [productId]);    

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
