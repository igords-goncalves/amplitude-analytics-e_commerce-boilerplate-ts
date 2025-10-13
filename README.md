# Amplitude Analytics Boilerplate (TypeScript)

A complete React boilerplate application demonstrating analytics implementation with Amplitude, featuring centralized event tracking, A/B testing, and comprehensive testing coverage.

## 🚀 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite 5
- **Analytics**: Amplitude Analytics Browser SDK
- **Experimentation**: Amplitude Experiment JS Client
- **Testing**: Jest (unit/integration) + Cypress (E2E)
- **Node.js**: v22.0.0

## 📋 Prerequisites

- Node.js v22.0.0 or higher
- npm or yarn package manager
- Amplitude API key (optional for demo purposes)

## 🛠️ Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd amplitude-analytics-boilerplate-ts
   ```

2. **Install dependencies restoreds**:
   ```bash
   npm install ci 
   ```

3. **Environment setup** (Optional):
   Create a `.env` file and add your Amplitude API key:
   ```
   AMPLITUDE_API_KEY=your_amplitude_api_key_here
   ```

## 🏃‍♂️ Running the Application

### Development Mode
```bash
npm run dev
```
Access the application at `http://localhost:5173`

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🧪 Testing

### Unit and Integration Tests
```bash
# Run tests in watch mode
npm test

# Run tests once (CI mode)
npm run test:ci
```

### End-to-End Tests
```bash
# Open Cypress Test Runner
npm run cypress:web

# Run Cypress tests headlessly
npm run cypress:headless
```

## 🎯 App Features

### 1. **Analytics Integration**
- **Amplitude SDK Integration**: Automatic initialization and event tracking
- **Centralized Event Management**: All events defined in `src/events.ts`
- **Type-Safe Event Tracking**: TypeScript definitions for consistent event properties

### 2. **Add to Cart Functionality**
- Interactive "Add to Cart" button with product tracking
- Tracks product details: ID, name, and price
- Demonstrates e-commerce analytics implementation

### 3. **A/B Testing & Experimentation**
- **Feature Flag System**: Dynamic variant assignment
- **Experiment Tracking**: Automatic tracking of experiment exposures
- **Button Variants**: Demonstrates different UI variations based on experiment groups

### 4. **Components Included**

#### `AddToCartButton`
- Tracks `add_to_cart` events with product metadata
- Demonstrates product analytics tracking patterns

#### `ExperimentWrapper`
- Implements A/B testing for checkout button variants
- Tracks experiment exposure events
- Shows control vs. variant UI differences

### 5. **Event Tracking Architecture**

The application uses a centralized event tracking system:

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

### 6. **Testing Coverage**
- **Unit Tests**: Component behavior and analytics tracking
- **Integration Tests**: Event firing and data flow
- **E2E Tests**: Complete user journey testing with Cypress

## 📁 Project Structure

```bash
src/
├── amplitude.ts           # Amplitude SDK setup and tracking functions
├── events.ts             # Centralized event definitions
├── main.tsx              # App entry point
├── global.d.ts           # TypeScript global definitions
└── components/
    ├── AddToCartButton.tsx    # E-commerce tracking component
    └── ExperimentWrapper.tsx  # A/B testing component

__tests__/
├── AddToCartButton.test.tsx   # Component unit tests
├── analytics.test.ts          # Analytics tracking tests
└── ExperimentWrapper.test.tsx # Experiment component tests

cypress/
├── e2e/
│   └── spec.cy.ts        # End-to-end test scenarios
├── fixtures/
└── support/
```

## 🔧 Configuration Files

- `vite.config.ts` - Vite build configuration
- `tsconfig.json` - TypeScript configuration
- `jest.config.cjs` - Jest testing configuration
- `cypress.config.ts` - Cypress E2E testing configuration

## 🎯 Use Cases

This boilerplate is perfect for:
- **E-commerce applications** requiring detailed product analytics
- **SaaS platforms** implementing feature flags and A/B testing
- **Marketing websites** tracking user engagement and conversions
- **Mobile web apps** needing robust analytics infrastructure

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## 📝 License

This project is licensed under the MIT License.
