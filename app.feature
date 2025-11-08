# Não crie testes isolados, ex. componente Button testado sozinho.
# Testes devem fazer parte de uma feature ou fluxo de usuário.
# Não teste detalhes de implementação, apenas comportamento visível ao usuário.

# language: gherkin

Feature: Suíte de testes (contrato e smoke checks)
  Como mantenedor da suíte de testes
  Eu quero que os cenários estejam organizados por nível (unit/ui, analytics, integration, e2e)
  Para que a suíte seja fácil de rodar e manter

  Background:
    Given a aplicação está corretamente inicializada
    And os componentes estão renderizados
    And as analytics tools estão configuradas

  # Smoke checks — rápidos e apropriados para rodar em cada push
  @maintenance @smoke
  Scenario: Smoke — elementos críticos e analytics core
    Given a aplicação inicializa
    When a página principal renderiza
    Then header, featured product CTA e ícone do carrinho estão visíveis
    And a inicialização do analytics core reporta estado ready

  # Observação: Cenários detalhados por domínio e nível estão em `docs/app-features/`.
  # Use os arquivos de autoridade (ex.: `ui.feature`, `analytics.feature`, `checkout.feature`)
  # para cenários executáveis e específicos de domínio.