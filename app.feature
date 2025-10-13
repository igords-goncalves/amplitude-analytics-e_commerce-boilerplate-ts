# see: https://www.youtube.com/watch?v=56N0P67ffIA

Feature: Amplitude Analytics E-commerce Application
  | As an e-commerce platform |
  | I want to track user interactions and run A/B experiments |
  | So that I can analyze user behavior and optimize conversions |

  Background:
    Given the application is properly initialized
    And Amplitude analytics is configured
    And the user is on the main application page

  @analytics @add-to-cart
  Scenario: User adds a product to cart
    Given a product with the following details is displayed:
      | id   | name          | price |
      | "1"  | "Produto Teste" | 49.9  |
    When the user clicks the "Adicionar ao carrinho" button
    Then an "add_to_cart" event should be tracked with the following properties:
      | property     | value           |
      | product_id   | "1"             |
      | product_name | "Produto Teste" |
      | price        | 49.9            |

  @analytics @add-to-cart @ui
  Scenario: Add to cart button is displayed correctly
    Given a product is available
    When the page loads
    Then the add to cart button should be visible
    And the button should display "Adicionar ao carrinho" text
    And the button should have the test id "add-to-cart"

  @experiments @ab-testing
  Scenario: A/B experiment is initialized and tracked
    Given the experiment "new_checkout_button" is configured
    When the ExperimentWrapper component loads
    Then an "experiment_view" event should be tracXked
    And the event should contain the experiment key "new_checkout_button"
    And the event should contain a variant value of either "control" or "variant"

  @experiments @ui @variant-control
  Scenario: Control variant displays standard checkout button
    Given the user is assigned to the "control" variant
    When the ExperimentWrapper component renders
    Then the checkout button should display "Comprar" text
    And the button should have the test id "checkout-btn"
    And the component should have the data attribute "data-variant" set to "control"

  @experiments @ui @variant-test
  Scenario: Test variant displays enhanced checkout button
    Given the user is assigned to the "variant" variant
    When the ExperimentWrapper component renders
    Then the checkout button should display "Comprar Agora (Novo)" text
    And the button should have the test id "checkout-btn"
    And the component should have the data attribute "data-variant" set to "variant"

  @analytics @initialization
  Scenario: Amplitude analytics is properly initialized
    Given the application starts
    When Amplitude initialization is triggered
    Then Amplitude should be initialized with the correct API key
    And autocapture for page views should be enabled
    And the initialization status should be marked as complete

  @analytics @error-handling
  Scenario: Analytics tracking handles missing initialization gracefully
    Given Amplitude is not initialized
    When an event is tracked
    Then a warning should be logged about Amplitude not being initialized
    And the application should continue to function normally

  @analytics @events-structure
  Scenario Outline: Event properties are correctly structured
    Given an event "<event_name>" needs to be tracked
    When the event is sent to Amplitude
    Then the event should have the correct structure
    And all required properties should be present

    Examples:
      | event_name      |
      | add_to_cart     |
      | experiment_view |

  @e2e @user-journey
  Scenario: Complete user interaction flow
    Given the user visits the application
    When the page loads completely
    Then the experiment variant should be assigned and tracked
    And the checkout button should display according to the assigned variant
    When the user interacts with the add to cart button
    Then the add to cart event should be tracked with correct product data
    And the user interface should remain responsive

  @e2e @multiple-interactions
  Scenario: Multiple user interactions are tracked correctly
    Given the user is on the application page
    When the user clicks the add to cart button multiple times
    Then each click should generate a separate "add_to_cart" event
    And all events should contain the same product information
    And the events should be sent in the correct sequence

  @integration @component-interaction
  Scenario: Components work together without conflicts
    Given both AddToCartButton and ExperimentWrapper are rendered
    When the page loads
    Then the experiment view event should be tracked first
    And the add to cart functionality should work independently
    And both components should render their UI elements correctly

  @error-handling @resilience
  Scenario: Application handles analytics failures gracefully
    Given there is a network issue preventing analytics calls
    When the user interacts with tracked elements
    Then the UI should remain functional
    And error messages should be logged appropriately
    And the user experience should not be degraded