export const EVENTS = {
  ADD_TO_CART: {
    name: 'add_to_cart',
    props: {
      PRODUCT_ID: 'product_id',
      PRODUCT_NAME: 'product_name',
      PRICE: 'price',
    },
  },
  EXPERIMENT_VIEW: {
    name: 'exposure',
    props: {
      EXPERIMENT_KEY: 'experiment_key',
      VARIANT: 'variant',
    },
  },
} as const;
