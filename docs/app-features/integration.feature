Feature: Integração entre componentes críticos

    @integration @component-interaction
    Scenario: AddToCart + ExperimentWrapper ordering
        Given AddToCartButton e ExperimentWrapper estão renderizados
        When a página carrega
        Then evento "experiment_view" deve ser emitido antes de eventos de view/add_to_cart
        And AddToCartButton deve funcionar mesmo se ExperimentWrapper falhar ao inicializar

    @integration @component-interaction
    Scenario: ProductCard + Analytics integrados
        Given o usuário clica em "view-details" de um product card
        When a navegação ocorre
        Then page_view e view_product events devem ser emitidos com dados corretos
