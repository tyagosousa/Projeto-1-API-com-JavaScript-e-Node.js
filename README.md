# Projeto CRUD de Usuários com Node.js

Este projeto é um servidor simples em Node.js que permite gerenciar usuários usando operações de CRUD.

## Endpoints

- <span style="color:red">**GET**</span> `/users`: Para listar usuários
- <span style="color:green">**POST**</span> `/users`: Para adicionar um usuário
- <span style="blue">**PUT**</span> `/users/:id`: Para editar um usuário
- <span style="orange">**DELETE**</span> `/users/:id`: Para excluir um usuário

- ## Verificação de Token

Este projeto utiliza um middleware para verificar um token de autenticação. O token deve ser enviado no cabeçalho da requisição como `Authorization`.
