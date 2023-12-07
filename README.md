<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

# Locação de Imóveis - Backend

Este é o projeto de backend para a aplicação de Locação de Imóveis, desenvolvida utilizando o framework Nest.js.
Este projeto é um complemento para a aplicacão [Projeto-de-Locacao-NextJs-Front](https://github.com/rafaelalmeidaV/Projeto-de-Locacao-NextJs-Front)

## Configuração do Ambiente

1. **Clonar o Repositório:**
   ```bash
   git clone https://github.com/seu-usuario/locacao-de-imoveis-backend.git
   ```

2. **Instalar Dependências:**
   ```bash
   cd locacao-de-imoveis-backend
   npm install
   ```

3. **Configurar Variáveis de Ambiente:**
   Crie um arquivo `.env` na raiz do projeto e configure as variáveis de ambiente necessárias, por exemplo:
   ```env
   DATABASE_URL=postgres://seu-usuario:senha@localhost:5432/nome-do-banco
   ```

4. **Executar Migrações e Seeders:**
   Execute o seguinte comando para aplicar as migrações e seeders no banco de dados:
   ```bash
   npx prisma migrate dev
   ```

## Rodando o Projeto

Execute o seguinte comando para iniciar o servidor:

```bash
npm run start
```

O servidor estará disponível em [http://localhost:3000](http://localhost:3000).

## Funcionalidades

- **Listar Todas as Locações:**
  - Faça uma requisição GET para `/locacao` para obter todas as locações cadastradas.

- **Criar Locação:**
  - Faça uma requisição POST para `/locacao` com os dados da locação para criar uma nova locação.

## Tecnologias Utilizadas

- [Nest.js](https://nestjs.com/)
- [Prisma](https://prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)

## Contribuindo

Se desejar contribuir para o desenvolvimento deste projeto, sinta-se à vontade para criar pull requests ou abrir issues.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
