Feature: Interface de usuário para aplicação de e-commerce

    @unit @ui @hero-banner
    Scenario: Banner hero da UI (unit)
        Given o componente hero banner está exibido
        When a página carrega
        Then o hero banner deve estar visível
        And o banner deve exibir o texto de headline correto
        And o banner deve ter um botão de call to action com o test id "hero-cta"

    @unit @ui @product-list
    Scenario: Lista de produtos na UI (unit)
        Given uma lista de produtos está disponível
        When a página carrega
        Then a lista de produtos deve estar visível
        And cada item de produto deve exibir o nome do produto, imagem e preço
        And cada item de produto deve ter o test id "product-item"

    @unit @ui @product-card
    Scenario: Cartão de produto na UI (unit)
        Given um produto específico está disponível
        When o componente do product card é renderizado
        Then o product card deve estar visível
        And o cartão deve exibir o nome do produto, imagem e preço
        And o cartão deve ter o test id "product-card"
        And o cartão deve ter um botão "Adicionar ao Carrinho" com o test id "add-to-cart-btn"
        And o cartão deve ter um link "Ver Detalhes" com o test id "view-details-link"
        And o cartão deve ter um botão "Comprar" com o test id "buy-now-btn"

    @unit @ui @product-details
    Scenario: Detalhes do produto na UI (unit)
        Given um produto específico está selecionado
        When a página de detalhes do produto carrega
        Then a seção de detalhes do produto deve estar visível
        And a seção deve exibir o nome do produto, imagem, descrição e preço
        And a seção deve ter o test id "product-details"

    @unit @ui @add-to-cart
    Scenario: Botão de add to cart na UI (unit)
        Given um produto está disponível
        When a página carrega
        Then o botão add to cart deve estar visível
        And o botão deve exibir o texto "Adicionar ao carrinho"
        And o botão deve ter o test id "add-to-cart"

    @unit @ui @experiment-variant-control
    Scenario: UI da variant de controle (unit)
        Given o usuário está atribuído à variant "control"
        When o componente ExperimentWrapper é renderizado
        Then o botão de checkout deve exibir o texto "Comprar"
        And o botão deve ter o test id "checkout-btn"
        And o componente deve ter o atributo de dados "data-variant" definido como "control"

    @unit @ui @experiment-variant-test
    Scenario: UI da variant de teste (unit)
        Given o usuário está atribuído à variant "variant"
        When o componente ExperimentWrapper é renderizado
        Then o botão de checkout deve exibir o texto "Comprar Agora (Novo)"
        And o botão deve ter o test id "checkout-btn"
        And o componente deve ter o atributo de dados "data-variant" definido como "variant"