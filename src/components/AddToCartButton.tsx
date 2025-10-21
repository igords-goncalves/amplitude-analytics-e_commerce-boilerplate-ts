import { EVENTS } from '../constants/events';
import AmplitudeInitializer from '../services/AmplitudeInitializer';

type Product = {
  id: string;
  name: string;
  price: number;
};

export function AddToCartButton({ product }: { product: Product }) {
  const amplitudeInitializer = new AmplitudeInitializer();
  amplitudeInitializer.init();
  const handleClick = () => {
    amplitudeInitializer.trackEvent(EVENTS.ADD_TO_CART.name, {
      [EVENTS.ADD_TO_CART.props.PRODUCT_ID]: product.id,
      [EVENTS.ADD_TO_CART.props.PRODUCT_NAME]: product.name,
      [EVENTS.ADD_TO_CART.props.PRICE]: product.price,
    });
  };

  return (
    <button onClick={handleClick} data-testid="add-to-cart">
      Adicionar ao carrinho
    </button>
  );
}
