const express = require('express')
const routes = express.Router() 
const {createUser, listUsers, listUserDetail, userDelete, editUser} = require("./controllers/users.js")
const verifyToken = require("./middlewares/AuthMiddleware.js")

// para verificar se a API está funcionando
routes.get('/health', (request, response) => {
    return response.status(200).json("API is on... ")
})

// listar todos os users
routes.get('/users', listUsers)

// listar user específico
routes.get("/users/:id", listUserDetail)

routes.use(verifyToken)

// deletar usuário
routes.delete("/users/:id", userDelete)

// atualizar usuário
routes.put("/users/:id", editUser)

// cadastrar users
routes.post("/users", createUser)

module.exports = routes