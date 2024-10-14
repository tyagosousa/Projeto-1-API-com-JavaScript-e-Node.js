let users = []

function createUser(request, response){
    const {name, age} = request.body
    const newUser = {
        id: users.length ? users[users.length - 1].id + 1 : 1,
        name,
        age
    }
    users.push(newUser)
    return response.status(201).json(newUser)
}

function listUsers(request, response){
    if (users.length === 0) {
        return response.status(200).json("Ainda não há usuários cadastrados")
    }
    return response.send(users)
}

function listUserDetail(request, response){
    const currentUser = users.find((user) => user.id === parseInt(request.params.id))
    if (!currentUser) {
        return response.status(404).json("Não foi encontrado nenhum usuário")
    }
    return response.status(200).json(currentUser)
}

function userDelete(request, response){
    const index = users.findIndex(
        (user) => user.id === parseInt(request.params.id)
    )
    if (index === -1) {
        return response.status(404).json("Não foi encontrado nenhum usuário")
    }
    users.splice(index, 1)
    return response.status(200).json("Usuário excluído com sucesso")
}

function editUser(request, response){
    const {age, name} = request.body
    const index = users.findIndex(
        (user) => user.id === parseInt(request.params.id)
    )
    if (index === -1) {
        return response.status(404).json("Não foi encontrado nenhum usuário")
    }
    const updateUser = {
        id: users[index].id,
        age,
        name
    }
    users[index] = updateUser
    return response.status(200).json(updateUser)
}

module.exports = {createUser, listUsers, listUserDetail, userDelete, editUser}