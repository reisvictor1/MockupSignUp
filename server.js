/*

*/


const express = require('express')
const bodyparser = require('body-parser')
const PORT = process.env.PORT || 4000

const users = []

const app = express()

app.use(bodyparser.json())


app.post('/register', (req, res) => {

    const { name, password, address, email } = req.body;

    if(name.match(' ')) return res.status(400).send('O nome de usuário não pode conter espaços')
    if(name.match('[A-Z]')) return res.status(400).send('O nome de usuário não pode conter caracteres maiúsculos')
    if(name.length <= 5 || name.length > 9) return res.status(400).send('Tamanho do nome de usuário inválido')
    if(!email.match("@")) return res.status(400).send('Email está formatado errado')
    if(address.length < 10) return res.status(400).send('Tamanho de Endereço inválido')
    if(password.length < 8) return res.status(400).send('Tamanho de senha inválido')
    if(password.match(' ')) return res.status(400).send('Senha não pode conter espaços')
    
    const user = {
        username: name,
        password: password,
        address: address,
        email: email 
    }

    users.push(user)

    console.log(users)

    return res.status(200).send('Usuário Cadastrado')
})


app.post('/login', async (req, res) => {

    const { name, pass } = req.body;

    users.forEach((user)=>{
        if(user.username == name && user.password != pass) return res.status(400).send(`Senha incorreta`)
        if(user.username == name && user.password == pass) {
            return res.status(200).json(user)
        }
    })
    
    return res.status(400).send(`Não foi encontrado nenhum usuário com essas credenciais`)

})


app.delete('/:username', (req, res) => {

    const { username } = req.params

    let index = -1;

    users.forEach((user) =>{
        console.log(user)
        index++
        if(user.username == username){
            users.splice(index, 1)
            res.status(200).send('Usuário Removido')
            return
        }
    })
    

    return res.status(400).send('Usuário não encontrado')
})


app.listen(PORT,() => {
    console.log(`Ouvindo o servidor na porta http://localhost:${PORT}`)
})


