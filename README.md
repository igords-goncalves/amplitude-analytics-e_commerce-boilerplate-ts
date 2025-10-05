# Amplitude Analytics Boilerplate (TypeScript)

Boilerplate com:
- React + Vite + TypeScript
- Amplitude SDK
- Eventos centralizados (events.ts)
- Testes: Jest (unit/integration) e Cypress (E2E)

## Como usar

1. Instalar dependências:
   ```bash
   npm install
   ```

2. Rodar em desenvolvimento:
   ```bash
   npm run dev
   ```

3. Rodar testes:
   ```bash
   npm test
   ```

4. Abrir Cypress:
   ```bash
   npm run e2e
   ```
   
## Estrutura do projeto

```bash
amplitude-analytics-boilerplate/
├── src/
│   ├── analytics.js
│   ├── events.js
│   ├── components/
│   │   ├── AddToCartButton.jsx
│   │   └── ExperimentWrapper.jsx
│   └── main.jsx
│
├── __tests__/
│   ├── analytics.test.js
│   ├── AddToCartButton.test.jsx
│   └── ExperimentWrapper.test.jsx
│
├── cypress/
│   ├── e2e/
│   │   ├── add_to_cart.cy.js
│   │   └── experiment.cy.js
│   └── support/
│       └── e2e.js
│
├── package.json
├── vite.config.js
└── README.md
```