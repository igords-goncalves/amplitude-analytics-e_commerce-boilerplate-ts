# Do not make isolated tests, ex. Button component tested alone.
# Tests must be part of a feature or user flow.
# Do not test implementation details, only user-visible behavior.

# see: https://www.youtube.com/watch?v=56N0P67ffIA

# language: gherkin

Feature: Organized test suite for e-commerce analytics and UI
  | As a test suite maintainer                                       |
  | I want tests grouped by type (unit/ui, analytics, integration,   |
  | e2e, experiments, error-handling)                                |
  | So that tests are easier to run and maintain across CI pipelines |

# --- IGNORE ---

  Background:
    Given the application is properly initialized
    And the components are rendered
    And the analytics tools are configured
    And the user is on the any application page

# --- TEST SCENARIOS ---

  # @see more ui scenarios in: docs/app/ui.feature
  # @see more analytics scenarios in: docs/app/analytics.feature
 
  @error-handling @resilience @network
  Scenario: Analytics network failures do not break UI (integration)
    Given there is a network issue preventing analytics calls
    When the user interacts with tracked elements
    Then the UI should remain functional
    And error messages should be logged appropriately
    And the user experience should not be degraded

  @integration @component-interaction
  Scenario: AddToCartButton and ExperimentWrapper integration
    Given both AddToCartButton and ExperimentWrapper are rendered
    When the page loads
    Then the experiment view event should be emitted first
    And the add to cart functionality should work independently
    And both components should render their UI elements correctly

  @e2e @user-journey
  Scenario: Complete user interaction flow (e2e)
    Given the user visits the application
    When the page loads completely
    Then the experiment variant should be assigned and tracked
    And the checkout button should display according to the assigned variant
    When the user interacts with the add to cart button
    Then the add to cart event should be tracked with correct product data
    And the user interface should remain responsive
    And the checkout flow can be completed successfully showing an order confirmation

  @e2e @multiple-interactions
  Scenario: Multiple add_to_cart clicks tracked sequentially (e2e)
    Given the user is on the application page with a product visible:
      | id   | name            | price |
      | "1"  | "Produto Teste" | 49.9  |
    When the user clicks the add to cart button 3 times
    Then three "add_to_cart" events should be tracked in the correct sequence
    And all events should contain the same product information

  @experiments @ab-testing @tracking
  Scenario: Experiment assignment is tracked once per session (e2e)
    Given the experiment "new_checkout_button" is configured
    When the user visits the site for the first time in a session
    Then an "experiment_view" event should be tracked
    When the user navigates within the app
    Then no duplicate "experiment_view" events should be tracked for the same session

  @maintenance @smoke
  Scenario: Smoke checks for critical analytics and UI hooks
    Given the application boots
    When the main page renders
    Then critical UI elements (header, featured product CTA, cart icon) should be visible
    And analytics core initialization should report ready state