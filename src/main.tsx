import './global.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import AmplitudeInitializer from './services/AmplitudeInitializer';
import { HomePage } from './pages/home';

const amplitudeInitializer = new AmplitudeInitializer();

amplitudeInitializer.init();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);
