Feature: Experiments / A/B testing

    @unit @experiments @ab-testing
    Scenario: Atribuição de experiment por sessão (e2e)
        Given o experiment "new_checkout_button" está configurado
        When o usuário visita o site pela primeira vez na sessão
        Then um evento "experiment_view" deve ser rastreado com key "new_checkout_button"
        And a variante atribuída deve ser persistida para essa sessão

    @unit @experiments
    Scenario: Não duplicar experiment_view na mesma sessão
        Given a session atual já teve experiment_view emitido
        When o usuário navega dentro do app
        Then não deve ser rastreado um novo evento "experiment_view" para a mesma sessão

    # NOTE: UI rendering for experiment variants is covered in `ui.feature`.
    @unit @experiments
    Scenario: Reatribuição controlada (for testing)
        Given o dev força reatribuição no localStorage para "control"
        When a página recarrega
        Then a UI e eventos refletem a variante forçada
