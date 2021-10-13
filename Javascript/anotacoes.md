Closure - capacidade de uma função lembrar do ambiente onde ela foi criada
Currying - transformar função com n parametros em apenas uma função que recebe um parametro. Para cada parametro retorna uma função
Hoisting - as declarações, tanto de varáveis quanto de funções, são elevadas ao escopo onde ela estiver (bloco, funçao ou global). Hoisting de variavel só eleva a criação da variável e não sua atribuição. Já a função é elevada ao topo como um todo (??)
    undefined - tem a variável mas não definiu o que ela é

Imutabilidade - variável nunca vai mudar, se quiser alterar vai ter que criar outra.

Tipos e variáveis
Antes era escopo global e escopo de função. Com o ES6 e o let e const surgem variaveis de bloco (pelo q eu entendi, é a ideia dos conceitos de def do python com suas variáveis)
Só de abrir e fechar chaves já é um escopo de bloco e fora das chaves é o escopo global. O outro escopo seria o escopo de função
**Não é boa prática escrever em escopo global!!**
- var: não aceita escopo de bloco, só de função e global

Tipos
- String: caracteres. Comandos: split(''), replace, slice (remove o caractere e retorna como fica) indicar a posição no parenteses, substr([começo], [quantidade de caracteres])
-Number: não diferencia int de float, é tudo number. Comandos: toString, toFixed([quantidade de casas decimais]), typeof, parseFloat(com casas decimais), parseInt(sem casas decimais)