import request from "../component/commom"
const findAll = () => {
    return request.get('/users')
}
const save = (user) => {
    return request.post('/users',user)
}
const deleteU = (id) => {
    return request.delete('/users/'+id)
}
const userService = {
    findAll,
    save,
    deleteU
}

export default userService;