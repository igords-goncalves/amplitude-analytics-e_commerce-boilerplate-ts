Feature: Offline / Rede intermitente

    @integration @offline
    Scenario: Ações em modo offline são aceitas e sincronizadas
        Given o usuário está offline
        When o usuário adiciona itens ao carrinho e tenta iniciar checkout
        Then app permite adicionar itens e guarda ações localmente
        And ao reconectar, ações são sincronizadas e eventos analytics enviados

    @integration @offline
    Scenario: Enfileirar eventos analytics e reenviar na ordem
        Given o dispositivo está offline
        When o usuário gera eventos (page_view, add_to_cart)
        Then eventos ficam enfileirados localmente
        When a conexão é restabelecida
        Then os eventos enfileirados são enviados na ordem correta
        And duplicatas são evitadas

    @integration @offline
    Scenario: Falha de rede parcial e retry com backoff
        Given o endpoint analytics retorna 500 temporariamente
        When eventos são enviados
        Then o sistema deve realizar retry com backoff e eventualmente persistir ou descartar após limite configurado
