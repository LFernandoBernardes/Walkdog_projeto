# Projeto Walkdog

Este trabalho utiliza a página de estudos de testes - Walkdog by Papito - cadastro para cuidadores e adestradores de pets, para criar teste funcionais na aplicação. 

Comecei o projeto fazendo os casos de teste para testes manuais - estes disponibilizados também aqui no projeto. Foram feitos testes positivos e negativos para o cadastro. 

Depois de fazer os casos de testes e os testes manuais. Me desafiei a faze-los de forma automatizada. 


* Site de estudo [Walkdog](https://walkdog.vercel.app/signup) 


## Tecnologias Utilizadas

Utilizei o Ecxel para criar os casos de testes. Os testes automatizados foram feito com Cypress baseado na liguangem JavaScrit.  


## Pré-Requisitos

É necessário ter o Node.js v16.13.2 e npm 8.3.2 instalados para rodar o projeto.

## Installation

```bash
npm install
```
> **NOTE: **
>
> It is necessary to have **node** installed
> 


## Como rodar o projeto ✅

O projeto é rodado em cypress tanto na versão Desktop quanto Mobile. 


#You open the Cypress UI for Desktop or Mobile
```bash
npx cypress open
``` 

```bash
npx cy: open: mobile
``` 

### Run the automation by command line for Desktop or Mobile

```bash
npx cypress run
```

```bash
npx test: mobile
```
#### Dependências

Foi usado a dependencia Chance para realizar testes com preenchimento randomico 

```bash
npm install chance
``` 

## 📌  - Informações importantes sobre a aplicação 📌

Não deixe de conferir a aplicação rodando no Action, foi feito o arquivo ci.yml para que se possa ver os testes sendo feitos automaticamente.



## ⚠️ Problemas enfrentados

Como o projeto foi feito apartir de um site espeficico para estudos de testes automatizados, não tinha acesso a documentação dos campos de cadastro. Portanto para fazer os casos de teste tive dificuldade para monta-los. Senti falta de requisitos a determinados campos obrigatórios.

Lembrando - sei que é só um site que ajuda nos estudos e não uma aplicação Real. A propósito fiquei muito feliz em encontrar esse site para realizar este trabalho 😊

Exemplo:

#### Campo Nome Completo:
Não tinha valores aceitos: Quantidade minima, Caracteres Especiais, Campo preenchido com digitos.

Neste campo aceitava tudo desde que não estivesse vázio o cadastro era realizado. 

Por exemplo é possível realizar o cadastro com o nome '%'
Isto pode ser considerado um erro no sistema pois precisamos de um informação completa.


#### Campo Atividades Extras:
Foi possível fazer o cadastro com todas as possibilidades, não era um campo obrigatório a ser selecionado. 

O usuário poderia escolher uma ou ambas ou nenhuma atividade para trabalhar com os pets. 

Fiquei na dúvida se não marcar nenhuma seria aceito ou não. 

## Agradecimento

Obrigado por chegar até aqui. Este é um dos primeiros projetos que fiz portanto estou aberto a críticas, sujestões. 😅
