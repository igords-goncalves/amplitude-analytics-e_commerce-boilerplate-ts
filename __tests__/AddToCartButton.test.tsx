import { render, screen, fireEvent } from '@testing-library/react';
import * as analytics from '../src/amplitude';
import { AddToCartButton } from '../src/components/AddToCartButton';
import { EVENTS } from '../src/events';

jest.spyOn(analytics, 'trackEvent').mockImplementation(() => {});

test('dispara evento add_to_cart ao clicar', () => {
  const product = { 
    id: '1', name: 
    'Produto Teste', 
    price: 49.9 
  };

  render(<AddToCartButton product={product} />);
  fireEvent.click(screen.getByTestId('add-to-cart'));

  expect(analytics.trackEvent).toHaveBeenCalledWith(EVENTS.ADD_TO_CART.name, {
    [EVENTS.ADD_TO_CART.props.PRODUCT_ID]: '1',
    [EVENTS.ADD_TO_CART.props.PRODUCT_NAME]: 'Produto Teste',
    [EVENTS.ADD_TO_CART.props.PRICE]: 49.9,
  });
});
