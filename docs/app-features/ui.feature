Feature: User interface for e-commerce application

    @unit @ui @hero-banner
    Scenario: Hero banner UI (unit)
        Given the hero banner component is displayed
        When the page loads
        Then the hero banner should be visible
        And the banner should display the correct headline text
        And the banner should have a call to action button with the test id "hero-cta"

    @unit @ui @product-list
    Scenario: Product list UI (unit)
        Given a list of products is available
        When the page loads
        Then the product list should be visible
        And each product item should display the product name, image, and price
        And each product item should have the test id "product-item"

    @unit @ui @product-card
    Scenario: Product card UI (unit)
        Given a specific product is available
        When the product card component renders
        Then the product card should be visible
        And the card should display the product name, image, and price
        And the card should have the test id "product-card"
        And the card should have an "Adicionar ao Carrinho" button with the test id "add-to-cart-btn"
        And the card should have a "Ver Detalhes" link with the test id "view-details-link"
        And the card should have a "Comprar" button with the test id "buy-now-btn"

    @unit @ui @product-details
    Scenario: Product details UI (unit)
        Given a specific product is selected
        When the product details page loads
        Then the product details section should be visible
        And the section should display the product name, image, description, and price
        And the section should have the test id "product-details"

    @unit @ui @add-to-cart
    Scenario: Add to cart button UI (unit)
        Given a product is available
        When the page loads
        Then the add to cart button should be visible
        And the button should display "Adicionar ao carrinho" text
        And the button should have the test id "add-to-cart"

    @unit @ui @experiment-variant-control
    Scenario: Control variant UI (unit)
        Given the user is assigned to the "control" variant
        When the ExperimentWrapper component renders
        Then the checkout button should display "Comprar" text
        And the button should have the test id "checkout-btn"
        And the component should have the data attribute "data-variant" set to "control"

    @unit @ui @experiment-variant-test
    Scenario: Variant UI (unit)
        Given the user is assigned to the "variant" variant
        When the ExperimentWrapper component renders
        Then the checkout button should display "Comprar Agora (Novo)" text
        And the button should have the test id "checkout-btn"
        And the component should have the data attribute "data-variant" set to "variant"    