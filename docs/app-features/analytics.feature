Feature: Rastreio de analytics para aplicação de e-commerce

    @unit @analytics @add-to-cart
    Scenario: evento add_to_cart emitido com propriedades corretas (unit)
        Given um produto com os seguintes detalhes está exibido:
            | id   | name            | price |
            | "1"  | "Produto Teste" | 49.9  |
        When o AddToCartButton é clicado
        Then um evento "add_to_cart" deve ser emitido para analytics com:
            | property     | value           |
            | product_id   | "1"             |
            | product_name | "Produto Teste" |
            | price        | 49.9            |

    @unit @analytics @experiments
    Scenario: evento experiment_view emitido ao carregar ExperimentWrapper (unit)
        Given o experiment "new_checkout_button" está configurado
        When o componente ExperimentWrapper carrega
        Then um evento "experiment_view" deve ser emitido
        And o evento deve conter a experiment key "new_checkout_button"
        And o evento deve conter um valor de variant que seja "control" ou "variant"

    @unit @analytics @initialization
    Scenario: Inicialização do Amplitude (unit)
        Given a aplicação inicia
        When a inicialização do Amplitude é disparada
        Then o Amplitude deve ser inicializado com a API key correta
        And o autocapture para page views deve estar habilitado
        And o status de inicialização deve ser marcado como complete

    @unit @analytics @error-handling
    Scenario: API de Analytics não inicializada registra warning (unit)
        Given o Amplitude não está inicializado
        When um evento é rastreado
        Then um warning deve ser logado sobre o Amplitude não estar inicializado
        And a aplicação deve continuar funcionando normalmente

    @unit @analytics @events-structure
    Scenario Outline: Estrutura do payload do evento está correta (unit)
        Given um evento "<event_name>" precisa ser rastreado
        When o evento é enviado para analytics
        Then o payload de analytics deve ter campos de topo válidos (event_type, user_id, timestamp)
        And as propriedades requeridas para o evento devem estar presentes

        Examples:
            | event_name      |
            | add_to_cart     |
            | experiment_view |
