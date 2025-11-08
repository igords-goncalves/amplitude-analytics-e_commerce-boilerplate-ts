Feature: Checkout (3 etapas) — fluxos principais

    @e2e @checkout @flow
    Scenario: Checkout — sucesso (pagamento fake aprovado)
        Given o carrinho contém 1 item
        When o usuário inicia o checkout de 3 etapas
        And preenche informações da compra e de envio válidas
        And seleciona pagamento e o simulador de pagamento retorna "approved"
        Then o pedido deve ser confirmado
        And a tela de sucesso deve ser exibida com um número de pedido
        And um evento "purchase" deve ser rastreado com os dados do pedido

    @e2e @checkout @failure
    Scenario: Checkout — pagamento recusado (fake)
        Given o carrinho contém 1 item
        When o usuário completa checkout mas o simulador de pagamento retorna "declined"
        Then o usuário deve ver mensagem de erro de pagamento
        And o pedido não deve ser confirmado
        And o usuário permanece na etapa de pagamento para tentar novamente

    @unit @checkout @validation
    Scenario: Checkout — validações de formulário
        Given o usuário está no formulário de informações de envio
        When o usuário envia o formulário com campos obrigatórios vazios ou inválidos
        Then erros de validação apropriados devem ser exibidos por campo
        And o usuário não pode prosseguir até corrigir os erros

    @e2e @checkout @remove
    Scenario: Checkout — remoção de item durante checkout
        Given o usuário está no passo 2 do checkout e há 1 item no resumo
        When o usuário clica em "remover item"
        Then o usuário deve ser redirecionado para a página do carrinho
        And o item removido não estará mais presente

    @e2e @checkout @buy-now
    Scenario: Checkout — comprar agora com múltiplas quantidades
        When o usuário clica no botão "buy-now-btn" do product card com quantidade 3
        When o usuário completa o checkout com pagamento aprovado
        Then o pedido confirmado deve refletir quantidade 3 no evento "purchase"
