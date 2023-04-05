---
icon: edit
date: 2023-04-05 20:20:00.00 -3
tag:
  - linguagem
  - programação
  - c
category:
  - Aula
order: 4
---

# Esqueleto de um programa em linguagem c
Todo programa escrito em linguagem C que vier a ser desenvolvido deve possuir o esqueleto mostrado no código-fonte abaixo.

```c
#include <stdio.h>
#include <stdlib.h>
int main(){
    printf("Hello World \n");
    system("pause");
    return 0;
}
```
À primeira vista, esse parece ser um programa fútil, já que sua única finalidade é mostrar na tela uma mensagem dizendo *Hello World*, fazer uma pausa e terminar o programa. Porém, ele permite aprender alguns dos conceitos básicos da linguagem C

```c
#include <stdio.h>//declarações globais
#include <stdlib.h>//Bibliotecas utilizadas pelo programa
int main(){//inicio do programa
    printf("Hello World \n");//escreve uma mensagem na tela de saída
    system("pause");//faz uma pausa antes de terminar o programa
    return 0;//retorna o valor 0 para o SO informando que finalizou sem erros
}//fim do programa
```

## Entendendo o código 


Temos, no início do programa, a região onde são feitas as suas declarações globais,  ou  seja,  aquelas  que  são  válidas  para  todo  o  programa.  No  exemplo,  o comando `#include <nome_da_biblioteca>` é utilizado para declarar as bibliotecas que serão utilizadas. 


::: tip Biblioteca
Uma biblioteca é um conjunto de funções (pedaços de código) já implementados e que podem ser utilizados pelo programador. 
:::


No exemplo anterior, duas bibliotecas foram adicionadas ao programa: `stdio.h` (que contém as funções de leitura do teclado e escrita em tela) e `stdlib.h` (que contem funções de conversões de tipos e alocação de memória). 

Todo o programa em linguagem C deve conter a função `main()`. Essa função é responsável pelo início da execução do programa, e é dentro dela que colocamos os comandos que queremos que o programa execute. 

::: tip Chaves
As chaves definem o início ("{") e o fim ("}") de um bloco de comandos/instruções. 
:::

No exemplo, as chaves definem o início e o fim do programa.

A função `main()` foi definida como uma função `int` (ou seja, retorna um valor do tipo inteiro) e, por isso, precisa devolver um valor inteiro. Temos então a necessidade do comando `return 0` apenas para informar que o programa chegou ao seu final e que está tudo OK.

A função `printf()` está definida na biblioteca `stdio.h`. Ela serve para imprimir uma mensagem de texto na tela do terminal. 

O texto a ser escrito deve estar entre aspas duplas, e, dentro dele, podemos também colocar caracteres especiais, como o "\n", que indica que é para mudar de linha antes de continuar a escrever na tela.

O comando `system("pause")` serve para interromper a execução do programa (fazer uma pausa) para que se possa analisar a tela de saída, após o término da execução do programa. Ela está definida dentro da biblioteca `stdlib.h`. 

Fim de instruções quase sempre termina com ponto e vírgula(";"). 

Os parênteses definem o início ("(") e o fim (")") da lista de argumentos de uma função. Um argumento é a informação que será passada para a função utilizar. No exemplo, podemos ver que os comandos `main`, `printf` e `system` são funções. 

## Indentação do código

Outra coisa importante que devemos ter em mente quando escrevemos um programa é a indentação do código. Trata-se de uma convenção de escrita de códigos-fonte que visa a modificar a estética do programa para auxiliar a sua leitura e interpretação.

::: tip Identação
A indentação é o espaçamento (ou tabulação) colocado antes de começar a escrever o código na linha. Ela tem como objetivo indicar a hierarquia dos elementos. 
:::

No nosso exemplo, os comandos `printf()`, `system()` e `return` possuem a mesma hierarquia (portanto, o mesmo espaçamento) e estão todos contidos dentro do comando `main()` (daí o porquê do espaçamento). 

O ideal é sempre criar um novo nível de indentação para um novo bloco de comandos.

A indentação é importante, pois o nosso exemplo anterior poderia ser escrito em apenas três linhas, sem afetar o seu desempenho, mas com alto grau de dificuldade de leitura para o programador 
```c
#include <stdio.h> 
#include <stdlib.h> 
int main(){printf("Hello World \n"); system("pause"); return 0;}
```


## Entrada e saída de dados

### printf

A função `printf()` é uma das funções de saída/escrita de dados da linguagem C. Seu nome vem da expressão em inglês print formatted, ou seja, escrita formatada. Basicamente, a função `printf()` escreve na saída de vídeo (tela) um conjunto de valores, caracteres e/ou sequência de caracteres de acordo com o formato especificado.

A forma geral da função `printf()` é:

```c
printf("tipos de saída", lista de variáveis)
```

A função `printf()` recebe dois parâmetros de entrada:

- *"tipos de saída"*: conjunto de caracteres que especifica o formato dos dados a serem escritos e/ou o texto a ser escrito.
- *lista de variáveis*: conjunto de nomes de variáveis, separados por vírgula, que serão escritos.

#### Escrevendo valores formatados

Quando queremos escrever dados formatados na tela usamos a forma geral da função, a qual possui os tipos de saída. Eles especificam o formato de saída dos dados que serão escritos pela função `printf()`. Cada tipo de saída é precedido por um sinal de "\%", e um tipo de saída deve ser especificado para cada variável a ser escrita. 

Assim, se quiséssemos escrever uma única expressão com o comando `printf()`, faríamos 

```c
printf("%tipo", expressão);
printf("%tipo1","%tipo2", expressão1, expressão2);
```

Note que os formatos e as expressões a serem escritas com aquele formato devem ser especificados na mesma ordem. Além disso, as variáveis e/ou expressão devem ser separadas por vírgulas.

| Tipos    | Saída para o printf                              |
| -------- | ------------------------------------------------ |
| %c       | escrita de um caractere (char)                   |
| %d ou %i | escrita de números inteiros (int ou char)        |
| %u       | escrita de números inteiros sem sinal (unsigned) |
| %f       | escrita de número reais (float ou double)        |
| %s       | escrita de vários caracteres                     |
| %p       | escrita de um endereço de memória                |
| %e ou %E | escrita em notação científica                    |
