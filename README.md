# Amplitude Analytics Boilerplate (TypeScript)

Uma aplicação boilerplate completa em React que demonstra a implementação de analytics com Amplitude, incluindo rastreamento centralizado de eventos, A/B testing e cobertura de testes abrangente.

## 🚀 Stack Tecnológico

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite 5
- **Analytics**: Amplitude Analytics Browser SDK
- **Experimentation**: Amplitude Experiment JS Client
- **Testing**: Jest (unit/integration) + Cypress (E2E)
- **Node.js**: v22.0.0

## 📋 Pré-requisitos

- Node.js v22.0.0 ou superior
- npm ou yarn como gerenciador de pacotes
- Amplitude API key (opcional para fins de demo)

## 🛠️ Instalação

1. **Clone o repositório**:
  ```bash
  git clone <repository-url>
  cd amplitude-analytics-boilerplate-ts
  ```

2. **Instale as dependências**:
  ```bash
  npm install ci 
  ```

3. **Configuração de ambiente** (Opcional):
  Crie um arquivo `.env` e adicione sua Amplitude API key:
  ```
  AMPLITUDE_API_KEY=your_amplitude_api_key_here
  ```

## 🏃‍♂️ Executando a Aplicação

### Modo de Desenvolvimento
```bash
npm run dev
```
Abra a aplicação em `http://localhost:5173`

### Build para Produção
```bash
npm run build
```

### Preview do Build de Produção
```bash
npm run preview
```

## 🧪 Testes

### Unit e Integration Tests
```bash
# Executar testes em modo watch
npm test

# Executar testes uma vez (modo CI)
npm run test:ci
```

### End-to-End Tests
```bash
# Abrir o Cypress Test Runner
npm run cypress:web

# Executar testes Cypress em modo headless
npm run cypress:headless
```

## 🎯 Funcionalidades da Aplicação

### 1. **Analytics Integration**
- **Amplitude SDK Integration**: Inicialização automática e rastreamento de eventos
- **Centralized Event Management**: Todos os eventos definidos em `src/events.ts`
- **Type-Safe Event Tracking**: Definições em TypeScript para propriedades consistentes dos eventos

### 2. **Funcionalidade Add to Cart**
- Botão interativo "Add to Cart" com rastreamento de produto
- Rastreia detalhes do produto: ID, name e price
- Demonstra padrões de analytics para e-commerce

### 3. **A/B Testing & Experimentation**
- **Feature Flag System**: Atribuição dinâmica de variantes
- **Experiment Tracking**: Rastreamento automático de exposures de experimentos
- **Button Variants**: Demonstra variações de UI com base no grupo de experimento

### 4. **Componentes Incluídos**

#### `AddToCartButton`
- Rastreia eventos `add_to_cart` com metadata do produto
- Demonstra padrões de rastreamento de produto

#### `ExperimentWrapper`
- Implementa A/B testing para variantes do botão de checkout
- Rastreia eventos de exposição do experimento
- Mostra diferenças entre control e variant na UI

### 5. **Arquitetura de Event Tracking**

A aplicação usa um sistema de rastreamento de eventos centralizado:

```typescript
// Events are defined in src/events.ts
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
    name: 'experiment_view',
    props: {
      EXPERIMENT_KEY: 'experiment_key',
      VARIANT: 'variant',
    },
  },
};
```

### 6. **Cobertura de Testes**
- **Unit Tests**: Comportamento de componentes e rastreamento de analytics
- **Integration Tests**: Disparo de eventos e fluxo de dados
- **E2E Tests**: Testes de jornada completa do usuário com Cypress

## 📁 Estrutura do Projeto

```bash
amplitude-analytics-boilerplate-ts/
├── app.feature                          # Documentação de features do app
├── cypress.config.ts                    # Cypress configuration
├── index.html                           # Ponto de entrada HTML
├── jest.config.cjs                      # Configuração do Jest para testes
├── package.json                         # Dependências e scripts
├── README.md                            # Documentação do projeto
├── tsconfig.json                        # Configuração TypeScript
├── tsconfig.node.json                   # Configuração TypeScript para Node.js
├── vite.config.ts                       # Configuração do Vite
├── __tests__/                           # Unit & integration tests (Jest)
│   ├── AddToCartButton.test.tsx
│   ├── analytics.test.ts
│   └── ExperimentWrapper.test.tsx
├── cypress/                             # E2E testing (Cypress)
│   ├── tsconfig.json
│   ├── e2e/
│   │   └── spec.cy.ts
│   ├── fixtures/
│   │   └── example.json
│   └── support/
│       ├── commands.ts                  # Comandos customizados do Cypress
│       └── e2e.ts                       # Setup para E2E
├── database/
│   └── product.ts                       # Modelos/dados de produto
├── docs/
│   ├── app-concept.md
│   ├── tasks.todo
│   └── app-features/                    # Documentação orientada a features e E2E
│       ├── accessibility.feature
│       ├── analytics.feature
│       ├── cart.feature
│       └── README.md
└── src/                                 # Código-fonte (React + TS)
    ├── global.css
    ├── global.d.ts
    ├── main.tsx
    ├── assets/
    │   └── images/
    ├── components/
    │   ├── BannerPromo.tsx
    │   ├── CategoriesSwipper.tsx
    │   ├── CategoryCard.tsx
    │   ├── FooterContent.tsx
    │   ├── NavigationMenu.tsx
    │   ├── ProductCard.tsx
    │   ├── ProductsGrid.tsx
    │   ├── _commons/                      # Primitivos compartilhados e hooks
    │   │   ├── Button.tsx
    │   │   ├── Dropdown.tsx
    │   │   ├── Image.tsx
    │   │   ├── Spinner.tsx
    │   │   └── hooks/
    │   │       ├── useButton.ts
    │   │       ├── useDropdown.ts
    │   │       └── useImage.ts
    │   └── layout/
    │       └── Site.tsx
    ├── template/
    │   ├── Footer.tsx
    │   ├── Header.tsx
    │   ├── Hero.tsx
    │   └── Main.tsx
    ├── constants/
    │   └── events.ts
    ├── feature/                          # Componentes de feature & experiment wrappers
    │   ├── AddToCartButton.tsx
    │   ├── ExperimentWrapper.tsx
    │   └── PurchaseButton.tsx
    ├── pages/
    │   ├── cart.tsx
    │   ├── checkout.tsx
    │   ├── home.tsx
    │   └── product.tsx
    ├── services/
    │   └── AmplitudeInitializer.ts
    └── utils/
        └── getFeatureFlagVariante.ts
```

## 🔧 Arquivos de Configuração

- `vite.config.ts` - Vite build configuration
- `tsconfig.json` - TypeScript configuration
- `jest.config.cjs` - Jest testing configuration
- `cypress.config.ts` - Cypress E2E testing configuration

## 🎯 Casos de Uso

Este boilerplate é ideal para:
- **E-commerce applications** que precisam de analytics detalhado de produtos
- **SaaS platforms** que implementam feature flags e A/B testing
- **Marketing websites** que rastreiam engajamento e conversões
- **Mobile web apps** que necessitam de uma infraestrutura robusta de analytics

## 🤝 Contribuição

1. Faça um fork do repositório
2. Crie uma branch para a feature
3. Faça suas alterações
4. Adicione testes para a nova funcionalidade
5. Garanta que todos os testes passem
6. Abra um pull request

## 📝 Licença

Este projeto está licenciado sob a MIT License.
