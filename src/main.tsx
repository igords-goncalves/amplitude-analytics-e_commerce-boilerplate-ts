import React from 'react';
import ReactDOM from 'react-dom/client';
import { initAmplitude } from './analytics';
import { AddToCartButton } from './components/AddToCartButton';
import { ExperimentWrapper } from './components/ExperimentWrapper';

initAmplitude();

const product = { id: '1', name: 'Produto Teste', price: 49.9 };

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ExperimentWrapper />
    <AddToCartButton product={product} />
  </React.StrictMode>
);
