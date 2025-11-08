Feature: Segurança (cliente-sided)

    @security @client
    Scenario: XSS em campos de produto
        Given um produto com nome contendo script tags é exibido
        When o product card é renderizado
        Then o conteúdo deve ser escapado e nenhum script deve ser executado

    @security @client
    Scenario: Inputs do checkout validados e sanitizados
        Given o usuário insere valores com caracteres especiais em endereço
        When o formulário é enviado
        Then os valores devem ser validados e sanitizados antes de qualquer renderização subsequente
