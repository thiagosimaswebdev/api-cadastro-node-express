require("dotenv").config() // carrega variáveis do .env

const express = require("express")
const cors = require("cors") // importa CORS

const app = express()

// porta definida no .env ou 3000
const PORT = process.env.PORT || 3000

// middleware
app.use(cors()) // permite requisições externas (React)
app.use(express.json()) // lê JSON do body

// array simulando banco de dados
let cadastros = []

// id automático
let proximoID = 1


// =========================
// Funções de validação
// =========================

// valida formato de email
function emailValido(email){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
}

// valida telefone com 10 ou 11 números
function telefoneValido(telefone){
    const regex = /^[0-9]{10,11}$/
    return regex.test(telefone)
}


// =========================
// Middleware de validação
// =========================

function validarCadastro(req, res, next){

    const {nome, email, telefone, mensagem} = req.body

    // valida nome
    if(!nome || nome.length < 3){
        return res.status(400).json({
            erro: "Nome é obrigatório e deve ter pelo menos 3 caracteres!"
        })
    }

    // valida email
    if(!email || !emailValido(email)){
        return res.status(400).json({
            erro: "Email inválido!"
        })
    }

    // valida telefone
    if(!telefone || !telefoneValido(telefone)){
        return res.status(400).json({
            erro: "Telefone deve conter 10 ou 11 números!"
        })
    }

    // valida tamanho da mensagem
    if(mensagem && mensagem.length > 500){
        return res.status(400).json({
            erro: "Mensagem pode ter no máximo 500 caracteres!"
        })
    }

    next() // continua para rota
}


// =========================
// ROTAS
// =========================

// rota teste
app.get("/", (req, res) => {
    res.send("API rodando!")
})

// listar cadastros
app.get("/cadastros", (req, res) => {
    res.status(200).json(cadastros)
})

// criar cadastro
app.post("/cadastros", validarCadastro, (req, res) => {

    const {nome, email, telefone, mensagem} = req.body

    const novoCadastro = {
        id: proximoID++, // gera id automático
        nome,
        email,
        telefone,
        mensagem: mensagem || null
    }

    cadastros.push(novoCadastro)

    res.status(201).json({
        mensagem: "Cadastro enviado com sucesso!",
        cadastro: novoCadastro
    })
})


// =========================
// INICIAR SERVIDOR
// =========================

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})