### Integrantes do Grupo:

    Guilherme Luan Silva dos Reis - UC23200423
    Gabriel Victor Vidal de Sales - UC23200816
    Guilherme Basilio Silva Felix Xavier - UC
    Guilherme Soares - UC23101914
    Flávio Oliveira Morais Leite - UC23101606

- Introdução
    - `npm i nanoid@3 sqlite3 typeorm @nestjs/typeorm`
- Criando o projeto
- Criando a API com o gerador de código
    - Postman
- Validação de dados
    - `@IsString()`
    - `@IsNumber()`
    - `PartialType()` -> aproveita de outra classe e torna os atributos opcionais
- TypeORM e SQLite
    - Configuração no `app.module.ts`
- Injeção de dependência
  - Feita pelo do construtor de forma automatica 
- Lógica na Service
  - `@InjectRepository(Estudante)`
- Bônus: boas práticas REST
- Próximos passos
- Desafio!