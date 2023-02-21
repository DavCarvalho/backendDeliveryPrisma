# backendDeliveryPrisma
> um sistema de **Clientes**, **Entregadores** e **Pedidos**. Utilizando o `MySQL` Database  e  `Prisma` como ORM..
> praticando **relacionamentos** entre tabelas Many to Many, praticando implemetação de **Autenticação Permissiva** com `JWT`
> As relações muitos-para-muitos referem-se a relações em que zero ou mais registros em um lado da relação podem ser conectados a zero ou mais registros no outro lado.

- [x] Cadastrar Clientes verificados por Middleware de autenticação
- [x] Gerar Hash de Password
- [x] Cadastrar Entregadores verificados por Middleware de autenticação
- [x] Inserção no Banco de Dados
- [x] Verificação se o Cliente está autenticado (JWT)
- [x] Verificação se o Entregador está autenticado (JWT)
- [x] Implementação de `JWT`
- [x] Relacionamento entre Cliente e Entregas - Many to Many
- [x] Relacionamento entre Entregadores e Entregas - Many to Many
- [ ] Upload de NF (Nota Fiscal)
- [x] Cadastro de Entregas
- [ ] Estado da Entrega - Entregue ou Pendente
- [ ] Avaliação de Entregador

# 💻 Sobre o projeto

Neste projeto, foi colocado em prática conteúdos aprendidos:

- Princípios **`S.O.L.I.D`** usados:

  -   > S - Princípio da Responsabilidade Única
  -   > L - Princípio da Substituição de Liskov
  -   > D - Princípio da Inversão de Dependência
 
- Integração de **API** com **Banco de Dados Relacional** `MySQL` via ORM **`Prisma.io`**
  > Prisma.io deferentemente dos ORM´s padrão tem uma facilidade maior na criação de **Relacionamentos** entre as tabelas. O objetivo do Prisma.io é tornar nós Dev´s mais **produtivos** ao criarmos `Queries` de consulta **`SQL`**.
- **Autenticação Permissiva** nas rotas com **`JWT`**
<br>

- Implementação de `Testes Unitários`: 
 > Os Teste Unitários são aqueles que são implementados apenas em alguns **pedaços** da aplicação, como **Services**, **UseCases**...
 > Resumindo, o foco central dos Testes Unitários são as **`Regras de Negócios`**.


Isso irá me ajudar a entender e exercitar os diferentes tipos de aplicações e estruturas que podemos fazer.

## Feito Com: ⚒
![Node.Js](https://img.shields.io/badge/Node.js-52b788?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-00b4d8?style=for-the-badge&logo=typescript&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-316192?style=for-the-badge&logo=mysql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-0a9396?style=for-the-badge&logo=prisma&logoColor=white)
![Prisma](https://img.shields.io/badge/Jest-ef5e1b?style=for-the-badge&logo=jest&logoColor=white)
