Feature: Carrinho e interações de compra

    # NOTE: add_to_cart UI and analytics scenarios are defined in `ui.feature` and `analytics.feature`.
    # This file focuses on cart behaviors: updates, removals and checkout navigation.
    @unit @ui @cart
    Scenario: Atualizar quantidade e recalcular total
        Given o carrinho contém um item com quantidade 1 e preço 10.00
        When o usuário aumenta a quantidade para 3
        Then a quantidade do item no carrinho deve ser 3
        And o total do carrinho deve ser atualizado para 30.00

    @unit @ui @cart
    Scenario: Remover item do carrinho
        Given o carrinho contém um item
        When o usuário remove o item
        Then o item não deve mais estar presente
        And se o carrinho ficar vazio, exibirá mensagem de carrinho vazio

    @e2e @ui @cart
    Scenario: Comprar Agora leva direto ao checkout com item selecionado
        Given um produto com id "2" está visível no product card
        When o usuário clica no botão "buy-now-btn" do product card
        Then o usuário é redirecionado para o fluxo de checkout com somente o item selecionado
        And o checkout exibe os detalhes desse item

    @unit @ui @cart
    Scenario: Acessar carrinho a partir de qualquer página via header
        Given o usuário está em qualquer página do site
        When o usuário clica no ícone do cart no header
        Then a página do carrinho deve ser aberta
