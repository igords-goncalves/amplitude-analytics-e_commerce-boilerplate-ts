Feature: Acessibilidade (a11y)

    @a11y @ui
    Scenario: Navegação por teclado no header e cart
        Given a página principal
        When o usuário navega por teclado (Tab / Shift+Tab)
        Then foco alcança logo, nav menu, campo de busca e ícone do carrinho em ordem lógica
        And botões possuem labels e roles apropriados

    @a11y @automation
    Scenario: Checks automáticos com axe
        Given a página de checkout
        When executamos o axe-core
        Then não devem existir violações críticas de acessibilidade
