---
icon: edit
date: 2023-04-12 20:20:00.00 -3
tag:
  - condicional
category:
  - Aula
order: 5
---

# Condicionais

[^BACKES] [^SOFFNER] [^LAPASINI]

Na programação estruturada, as instruções são executadas de forma sequencial. Em muitas situações, é necessário realizar uma verificação e analisar o resultado para determinar qual caminho seguir, o que é conhecido como desvio de fluxo. 

Por exemplo, quando compramos um carro, a taxa de juros pode ser diferente dependendo do valor da entrada. Da mesma forma, quando precisamos decidir se um aluno está aprovado, reprovado ou em exame com base em sua média escolar. 

Não podemos tratar essas situações apenas com os conceitos básicos de variáveis, tipos de variáveis, constantes, comando de atribuição, entrada e saída de dados. É necessário utilizar estruturas que nos permitam impor condições para a execução de instruções específicas ou criar condições que possibilitem o desvio do fluxo do programa.

::: tip Condição
Por condição entende-se qualquer expressão que tenha como resultado uma valor `verdadeiro` ou `falso`. 
:::


Uma condição em um programa pode conter expressões relacionais usando os operadores de comparação (> ,<, >=, <=, ==, !=), que resultam em um valor booleano (verdadeiro ou falso). Além disso, as condições podem conter expressões booleanas mais complexas, que combinam múltiplas expressões relacionais e operadores lógicos (AND, OR, NOT) para avaliar se a condição é verdadeira ou falsa.





## Estrutura

[^MANZANO]

::: tip 
A estrutura que permite desviar fluxo do programa é denominada de estrutura condicional, estrutura de seleção ou estrutura de controle 
:::
<figure>

```plantuml
@startuml
digraph G {
     //graph [rankdir=LR nodesep=0.5 ranksep=0.5];
     graph [nodesep=0.5 ranksep=0.5];
     graph [splines=ortho, nodesep=1.5]

     ini[shape=ellipse label="In\ício"  style=filled fillcolor="navy" fontcolor="white"];
     Nota1Nota2Nota3[shape=invtrapezium label="Nota1,Nota2,Nota3" style=filled fillcolor="cornflowerblue" fontcolor="white" width=2.2 fixedsize=shape];
     media[shape=box label="media<-(Nota1+Nota2+Nota3)/3" style=filled fillcolor="steelblue" fontcolor="white"];
     testemediaap[shape=diamond label="Media >= 7" style=filled fillcolor="darkorange" fontcolor="white"];
     testemediarp[shape=diamond label="Media < 2.5" style=filled fillcolor="darkorange" fontcolor="white"];
     apro[shape=parallelogram label="Aluno passado por média" style=filled fillcolor="forestgreen" fontcolor="white" width=2.7 fixedsize=shape];
     reco[shape=parallelogram label="Aluno Reprovado" style=filled fillcolor="forestgreen" fontcolor="white" width=2 fixedsize=shape];
     final[shape=parallelogram label="Aluno na Final" style=filled fillcolor="forestgreen" fontcolor="white" width=2 fixedsize=shape];
     joinrepo,joinap[shape=point label="" style=filled fillcolor="navy" fontcolor="white"  width=0.2 fixedsize=true ];
     fim[shape=ellipse label="Fim"  style=filled fillcolor="navy" fontcolor="white"];
     
     ini->Nota1Nota2Nota3->media->testemediaap
     testemediaap->apro[label=Sim]
     apro->joinap
     testemediaap:w->testemediarp[label=Não]
     testemediarp:w->reco[label=Sim]
     testemediarp->final[label=Não]
     {reco,final}->joinrepo
     joinrepo->joinap->fim
}
@enduml
```

<figcaption>Exemplo de Fluxigrama</figcaption>
</figure>

## Comando IF

O comando if é utilizado sempre que é necessário escolher entre dois caminhos dentro do programa ou quando se deseja executar um ou mais comandos que estejam sujeitos ao resultado de um teste. A forma geral de um comando if é:
```c
if(condição) { 
    sequência de comandos;
}
```

Na execução do comando if a condição será avaliada e:

- Se a condição for **verdadeira**, a sequência de comandos será executada.
- Se a condição for **falsa**, a sequência de comandos não será executada, e o progra-ma continuará a partir do primeiro comando seguinte ao final do comando if.

::: code-tabs

@tab c

```c
#include <stdio.h>
#include <stdlib.h>
int main(){
    int num;
    printf("Digite um numero: \n");
    scanf("%d",&num);
    if(num > 10){
        printf("O numero e maior do que 10");
    }        
    system("pause");  
    return 0;
}
```
@tab java

```java
import java.util.Scanner;
public class Programa{
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        int num;
        System.out.println("Digite um numero: ");
        num = teclado.nextInt();
        if(num > 10){
            System.out.println ("O numero e maior do que 10");
        }        
    }
}
```

@tab:active fluxograma

```plantuml
@startuml
digraph G {
     graph [nodesep=0.5 ranksep=0.5];
     graph [splines=ortho, nodesep=0.5]

     ini[shape=ellipse label="In\ício"  style=filled fillcolor="navy" fontcolor="white"];
     p1[shape=invtrapezium label="num" style=filled fillcolor="cornflowerblue" fontcolor="white" width=2.2 fixedsize=shape];
     c1[shape=diamond label="num > 10" style=filled fillcolor="darkorange" fontcolor="white"];
     c1p1[shape=parallelogram label="O numero e maior do que 10" style=filled fillcolor="forestgreen" fontcolor="white" width=3 fixedsize=shape];
     c1join[shape=point label="" style=filled fillcolor="navy" fontcolor="white"  width=0.2 fixedsize=true ];
     fim[shape=ellipse label="Fim"  style=filled fillcolor="navy" fontcolor="white"];
     
     ini->p1->c1->c1join->fim
     {rank = same; c1;c1p1}
     c1->c1p1[xlabel=Sim]
     c1p1->c1join[constraint=false]
     
}
@enduml
```


:::



## Exercícios

[Exercício](exercicios/02_condicional.md)

## Referências

@include(../bib/bib.md)



