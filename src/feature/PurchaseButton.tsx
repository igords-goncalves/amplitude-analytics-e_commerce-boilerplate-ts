import { Button } from "../components/_commons/Button";

export function PurchaseButton() {
    return (
        <Button
            className="px-4 text-[12px] w-full font-medium rounded-lg bg-black"
            data-testid="checkout-btn"
        >
            Comprar
        </Button>
    );
}
