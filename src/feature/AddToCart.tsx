import AmplitudeInitializer from '../services/AmplitudeInitializer';
import { EVENTS } from '../constants/events';

import { Button } from '../components/_commons/Button';

import { Product } from '../../database/product';

export function AddToCart({ product, ...props }: {product: Partial<Product>}) {
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
    <Button onClick={handleClick} {...props} data-testid="data-testid">
      Adicionar ao carrinho
    </Button>
  );
}
