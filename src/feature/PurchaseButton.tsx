import { Button } from "../components/_commons/Button";

export function PurchaseButton() {    
    return (
        <Button onClick={() => alert("Purchase completed!")}>
            Complete Purchase
        </Button>
    )
}