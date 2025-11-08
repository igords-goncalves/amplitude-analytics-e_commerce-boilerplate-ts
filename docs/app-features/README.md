# Features (Gherkin) — mapa e autoridade

Este diretório contém os arquivos `.feature` que descrevem cenários por domínio e nível de teste.
Use este README como referência rápida: qual arquivo é a "autoridade" para cada tipo de cenário.

Autoridade por domínio

- `ui.feature` — Contrato visual e comportamento de componentes (tests/unit, UI smoke). Autoridade para:
  - Hero banner, Product Card, Product List, Product Details, botões visuais (add-to-cart, buy-now), e checks de variante de experiment.

- `analytics.feature` — Eventos, payloads e inicialização do analytics (Amplitude). Autoridade para:
  - add_to_cart, experiment_view, purchase, inicialização e tratamento de falhas do SDK.

- `cart.feature` — Comportamento do carrinho (integração e orquestração):
  - atualizar quantidade, remover item, navegação para carrinho, buy-now orchestration (não inclui asserts visuais detalhados).

- `checkout.feature` — Fluxo de checkout de 3 etapas (sucesso, falha, validações, remoção durante checkout, buy-now flows).

- `persistence.feature` — Persistência e sincronização entre abas (localStorage/sessionStorage, fallback em modo privado).

- `experiments.feature` — Atribuição de variantes, dedupe e reatribuição controlada (business rules do experiment system).

- `integration.feature` — Cenários que cobrem ordering/coordenação entre componentes (AddToCart, ExperimentWrapper, ProductCard).

- `e2e.feature` — Jornadas e casos transversais (múltiplos cliques, recovery, orquestração entre páginas). NÃO repete passos detalhados do `checkout.feature`.

- `offline.feature` — Offline behaviour, enfileiramento de eventos, retry/backoff para analytics e pedidos pendentes.

- `accessibility.feature` — Checks de a11y (keyboard, axe-core smoke checks).

- `security.feature` — Testes cliente-side de segurança (XSS, sanitização de inputs).

- `performance.feature` — Checks simples de carregamento, placeholders e lazy-loading em redes lentas.

Práticas recomendadas

- Não duplique cenários: se o teste é um check visual do componente, coloque-o em `ui.feature`.
- Use tags (`@unit`, `@ui`, `@integration`, `@e2e`, `@smoke`, `@experiments`) para rodar subsets.
- Para fluxos (checkout, carrinho), escreva orquestrações em `checkout.feature`/`cart.feature` e apenas verifique elementos críticos — asserts visuais detalhados ficam em `ui.feature`.
- Ao adicionar um novo cenário, atualize este README com a autoridade apropriada.

CI suggestion

- Job `unit-ui`: roda todos os `@unit` e `@ui` (rápido).
- Job `smoke`: roda todos os `@smoke` (on push).
- Job `e2e`: roda suites `@e2e` em ambientes de integração (nightly / pre-release).
