import './global.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { HomePage } from './pages/home';
import AmplitudeInitializer from './services/AmplitudeInitializer';

/**
 * Inicializa o Amplitude assim que a aplicação carrega
 * não é necessário useEffect aqui, 
 * pois este arquivo é executado apenas no cliente
 */
AmplitudeInitializer.getInstance().init();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);
