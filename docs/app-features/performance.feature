Feature: Performance e carregamento

    @performance @loading
    Scenario: Loading states e placeholders
        Given imagens grandes no product grid
        When a página carrega em rede lenta
        Then placeholders/spinners devem aparecer e layout não deve quebrar
        And imagens são lazy-loaded

    @performance @smoke
    Scenario: First load em rede lenta (smoke)
        Given build atual
        When carregado em rede throttled (slow 3G)
        Then a página principal deve renderizar conteúdo crítico em um tempo aceitável
        And mostrar fallback UX enquanto recursos não essenciais carregam
