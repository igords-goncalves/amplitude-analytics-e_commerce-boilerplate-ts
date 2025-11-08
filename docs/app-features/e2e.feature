Feature: E2E — jornadas completas do usuário

    # NOTE: The detailed checkout flows (success, failure, validations, buy-now) are defined
    # in `checkout.feature`. Keep E2E journeys focused on orchestration across pages and
    # cross-cutting behaviours (multi-item flows, recovery, analytics sequencing).

    @e2e @multiple-interactions
    Scenario: Múltiplos cliques em add_to_cart rastreados sequencialmente
        Given um produto está visível:
            | id   | name            | price |
            | "1"  | "Produto Teste" | 49.9  |
        When o usuário clica no botão "add-to-cart-btn" 3 vezes
        Then três eventos "add_to_cart" devem ser rastreados na sequência correta
        And todos os eventos devem conter as mesmas informações do produto

    @e2e @journey @checkout
    Scenario: Usuário começa checkout mas fecha aba (recovery)
        Given o usuário iniciou checkout e saiu antes de confirmar
        When o usuário retorna à aplicação na mesma sessão
        Then o estado do checkout deve ser restaurado até a etapa salvo (ou reset dependendo da política definida)
