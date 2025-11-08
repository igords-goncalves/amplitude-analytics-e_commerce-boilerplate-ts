# Conceito do Site

O site é um e-commerce fictício especializado na venda de "teach stacks" para desenvolvimento de software. Imagine se uma pessoa pudesse comprar linguagens de programação, frameworks, ferramentas e bibliotecas como se fossem produtos físicos em uma loja online, sem precisar de cadastro para realizar a compra.

---

## Objetivo

Criar um site de e-commerce onde os usuários possam:

- Navegar por diferentes teach stacks;
- Ver detalhes dos produtos;
- Adicionar itens ao carrinho e remover itens;
- Finalizar a compra através de um checkout dividido em 3 etapas.

Todos esses processos devem ser trackeados usando Google Analytics 4 (GA4) e GTM, Amplitude e Hotjar para análise de comportamento do usuário e otimização da experiência, retenção, engajamento e conversão.

A ideia é que o site esteja pronto para criação de experimentos, testes A/B e análise de funil de conversão, com suporte a feature flags.

---

## Critérios de Aceitação

- [ ] O site não precisa de um sistema de autenticação de usuários.
- [ ] Deve ter integração com ferramentas de análise para monitoramento de comportamento do usuário.
- [ ] Foco na experiência do usuário e na facilidade de navegação.
- [ ] O carrinho deve ser acessível a partir de qualquer página do site.
- [ ] Deve ser possível comprar os produtos do carrinho.
- [ ] O carrinho deve permitir a remoção de itens e atualização de quantidades.
- [ ] O checkout deve ser dividido em 3 etapas: informações da compra, informações de envio e pagamento, confirmação do pedido bem sucedido.
- [ ] Se o usuário deseja excluir algum item do checkout, ele deve ser redirecionado para a página do carrinho.
- [ ] O card do produto deve ter um botão de "Comprar Agora" que leva o usuário diretamente para a página de checkout com o item selecionado.
- [ ] O card deve ter também um botão de "Adicionar ao Carrinho" que adiciona o item ao carrinho sem sair da página atual.
- [ ] Através de um campo de busca, o usuário deve conseguir encontrar produtos avulsos ou por categorias.
- [ ] Na tela de detalhes do produto, o usuário deve ver informações completas sobre o produto, incluindo descrição, preço, avaliações e link para documentação oficial.
- [ ] Deve ser possível comprar o produto em diferentes quantidades.
- [ ] Deve ser possível comprar o produto individualmente na tela de detalhes do produto.

---

## Funcionalidades Principais

### 1. Página Inicial

- Header de navegação com dropdown para categorias, campo de pesquisa e carrinho de compras.
- Banner promocional destacando um produto, categoria ou pacote, com copy e botão de "Comprar Agora".
- Seção de categorias com cards (Linguagens, Frameworks, Ferramentas, Bibliotecas).
- Produtos em destaque com imagem, descrição, preços e opção de compra direta ou adicionar ao carrinho.

### 2. Página de Produto

- Detalhes completos do produto (descrição, preço, avaliações, link da documentação, etc.).
- Opção para selecionar quantidade e adicionar ao carrinho ou comprar agora.
- Recomendações de produtos relacionados ao produto da página.

### 3. Carrinho de Compras

- Lista de itens adicionados com opção de alterar quantidade ou remover itens.
- Cálculo automático do total do carrinho.
- Botão para proceder ao checkout (comprar agora).

### 4. Checkout

- Formulário para informações da compra.
- Informações de envio e pagamento.
- Informação de compra bem-sucedida.

### 5. Rastreamento e Análise

- Integração com Google Analytics 4 (GA4) e Google Tag Manager (GTM) para monitoramento de eventos.
- Coleta de dados de comportamento do usuário com Amplitude.
- Gravação de sessões e mapas de calor com Hotjar.

### 6. Responsividade

- Design responsivo para dispositivos móveis e desktops.
- Testes de usabilidade em diferentes tamanhos de tela.
- Otimização de desempenho para carregamento rápido em todas as plataformas.

### 7. Segurança

- Implementação de HTTPS para segurança de dados.
- Proteção contra ataques comuns (XSS, CSRF, etc.).
- Conformidade com regulamentos de privacidade (GDPR, CCPA).

---

## Adicionais

Um framework deve vir acompanhado da recomendação de compra de uma linguagem de programação, pois entende-se que frameworks são dependentes de linguagens.

---

## Modelo de dados (mockup)

Produtos:

```json
{
  "id": "inteiro",
  "nome": "string",
  "descricao": "string",
  "preco": "decimal",
  "categoria": "string",
  "estoque": "inteiro",
  "avaliacoes": [
    {
      "usuario": "string",
      "nota": "inteiro",
      "comentario": "string"
    }
  ],
  "imagem_url": "string",
  "documentacao_url": "string"
}
```

---
