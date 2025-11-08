import AmplitudeInitializer from "../services/AmplitudeInitializer";
import { EVENTS } from "../constants/events";
import { Button } from "../components/_commons/Button";
import { Product } from "../../database/product";
import { ShoppingCart } from "lucide-react";

export function AddToCartButton({
    product,
    ...props
}: {
    product: Partial<Product>;
}) {
    const amplitudeInitializer = AmplitudeInitializer.getInstance();

    const handleClick = () => {
        amplitudeInitializer.trackEvent(EVENTS.ADD_TO_CART.name, {
            [EVENTS.ADD_TO_CART.props.PRODUCT_ID]: product.id,
            [EVENTS.ADD_TO_CART.props.PRODUCT_NAME]: product.nome,
            [EVENTS.ADD_TO_CART.props.PRICE]: product.preco,
            [EVENTS.ADD_TO_CART.props.CATEGORY]: product.categoria,
        });
    };

    return (
        <Button
            onClick={handleClick}
            className="font-semibold text-white bg-blue-500 rounded-full"
            data-testid="data-testid"
            {...props}
        >
            <ShoppingCart />
        </Button>
    );
}
