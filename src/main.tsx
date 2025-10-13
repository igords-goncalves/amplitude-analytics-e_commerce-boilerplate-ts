import React from 'react';
import ReactDOM from 'react-dom/client';
import { AddToCartButton } from './components/AddToCartButton';
import { ExperimentWrapper } from './components/ExperimentWrapper';
import AmplitudeInitializer from './amplitude';
import './global.css';

const amplitudeInitializer = new AmplitudeInitializer();

amplitudeInitializer.init();

const product = { id: '1', name: 'Produto Teste', price: 49.9 };

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ExperimentWrapper />
    <AddToCartButton product={product} />
  </React.StrictMode>
);
