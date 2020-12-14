# Postogram

## Description

Posts from all sources in a single line

## Installation

```bash
$ npm install
```

## Preparation

1. Creating PostgresSQL server
2. Changing `ormconfig.json` as it should be
3. Writing environment variables:
   - SECRET_KEY

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Stack:

- Backend:
  - Core - [Nest](https://nestjs.com/) (on [Fastify](https://docs.nestjs.com/techniques/performance#performance-fastify) basis)
  - ORM - [TypeORM](https://typeorm.io/)
  - Authetication - [ Passport ](http://www.passportjs.org/), [ JWT ](https://jwt.io/), [ Bcrypt.js ](https://github.com/kelektiv/node.bcrypt.js)
- Database - [ PostgreSQL ](https://www.postgresql.org/)
