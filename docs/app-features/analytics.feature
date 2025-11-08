Feature: Analytics tracking for e-commerce application

    @unit @analytics @add-to-cart
    Scenario: add_to_cart event emitted with correct properties (unit)
        Given a product with the following details is displayed:
            | id   | name            | price |
            | "1"  | "Produto Teste" | 49.9  |
        When the AddToCartButton is clicked
        Then an "add_to_cart" event should be emitted to analytics with:
            | property     | value           |
            | product_id   | "1"             |
            | product_name | "Produto Teste" |
            | price        | 49.9            |

    @unit @analytics @experiments
    Scenario: experiment_view event emitted on ExperimentWrapper load (unit)
        Given the experiment "new_checkout_button" is configured
        When the ExperimentWrapper component loads
        Then an "experiment_view" event should be emitted
        And the event should contain the experiment key "new_checkout_button"
        And the event should contain a variant value of either "control" or "variant"

    @unit @analytics @initialization
    Scenario: Amplitude initialization (unit)
        Given the application starts
        When Amplitude initialization is triggered
        Then Amplitude should be initialized with the correct API key
        And autocapture for page views should be enabled
        And the initialization status should be marked as complete

    @unit @analytics @error-handling
    Scenario: Analytics API not initialized logs warning (unit)
        Given Amplitude is not initialized
        When an event is tracked
        Then a warning should be logged about Amplitude not being initialized
        And the application should continue to function normally

    @unit @analytics @events-structure
    Scenario Outline: Event payload structure is correct (unit)
        Given an event "<event_name>" needs to be tracked
        When the event is sent to analytics
        Then the analytics payload should have valid top-level fields (event_type, user_id, timestamp)
        And required properties for the event should be present

        Examples:
            | event_name      |
            | add_to_cart     |
            | experiment_view |
