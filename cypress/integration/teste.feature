Feature: Automação de formulário

    Scenario: Preencher campo primeiro nome
        Given que acesso o site automation
        When preencher campo primeiro nome
        And preencho o campo segundo nome
        And preencho o campo endereco
        And preencho o campo email
        And preencho o campo telefone
        And clica na opcao male
        And clico na opcao movies
        And seleciono o idioma 
        And seleciono a skill
        And seleciono o pais
        And seleciono o local
        And seleciono o ano 
        And seleciono o mes 
        And seleciono o dia
        And preencho o campo senha
        And preencho o campo confirmar senha
        And clico no botão Refresh
        Then verifico que a tela foi atualizada
