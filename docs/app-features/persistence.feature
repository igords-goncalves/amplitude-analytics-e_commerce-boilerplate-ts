Feature: Persistência e sessão do carrinho

    @integration @persistence
    Scenario: Persistência do carrinho em localStorage
        Given o usuário adiciona itens ao carrinho
        When a página é recarregada
        Then o carrinho deve ser restaurado a partir do localStorage com os mesmos itens e quantidades

    @integration @persistence
    Scenario: Multi-aba sincronização do carrinho
        Given o usuário tem duas abas abertas da aplicação
        When o usuário adiciona um item em uma aba
        Then a outra aba deve atualizar o estado do carrinho automaticamente

    @integration @persistence
    Scenario: localStorage indisponível (modo privacidade)
        Given localStorage não pode ser usado
        When o usuário adiciona itens ao carrinho
        Then o app deve continuar funcionando em memória durante a sessão e informar limitação de persistência
