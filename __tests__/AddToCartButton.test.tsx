import { render, screen, fireEvent } from '@testing-library/react';
import { AddToCartButton } from '../src/components/AddToCartButton';
import { EVENTS } from '../src/constants/events';
import AmplitudeInitializer from '../src/services/AmplitudeInitializer';

jest.mock('../src/services/AmplitudeInitializer', () => {
  return {
    __esModule: true,
    default: {
      getInstance: jest.fn(() => ({
        trackEvent: jest.fn(),
      })),
    },
  };
});

describe('AddToCartButton Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
});

test.skip('dispara evento add_to_cart ao clicar', () => {
  const amplitudeInitializer = AmplitudeInitializer.getInstance();

  const product = { 
    id: '1', name: 
    'Produto Teste', 
    price: 49.9 
  };

  render(<AddToCartButton product={product} />);
  fireEvent.click(screen.getByTestId('add-to-cart'));

  expect(amplitudeInitializer.trackEvent).toHaveBeenCalledWith(EVENTS.ADD_TO_CART.name, {
    [EVENTS.ADD_TO_CART.props.PRODUCT_ID]: '1',
    [EVENTS.ADD_TO_CART.props.PRODUCT_NAME]: 'Produto Teste',
    [EVENTS.ADD_TO_CART.props.PRICE]: 49.9,
  });
});
