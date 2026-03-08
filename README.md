# 📦 API de Cadastro

![Node](https://img.shields.io/badge/Node.js-18-green)
![Express](https://img.shields.io/badge/Express-4-blue)
![Status](https://img.shields.io/badge/status-em%20desenvolvimento-orange)

API REST desenvolvida com **Node.js e Express** para gerenciamento de cadastros.
O sistema permite registrar usuários com validação de dados e listar os registros cadastrados.

Este projeto foi criado como prática de desenvolvimento **backend** e integração com aplicações **frontend**, podendo ser conectado a formulários de sites ou aplicações web.

---

# 🚀 Tecnologias utilizadas

* JavaScript
* Node.js
* Express
* Dotenv

---

# 📁 Estrutura do Projeto

```
api-cadastro/
│
├── server.js
├── package.json
├── .env
└── README.md
```

---

# ⚙️ Instalação e execução

### 1️⃣ Clonar o repositório

```
git clone https://github.com/seuusuario/api-cadastro-node-express
.git
```

### 2️⃣ Entrar na pasta do projeto

```
cd api-cadastro
```

### 3️⃣ Instalar dependências

```
npm install
```

### 4️⃣ Executar o servidor

```
node server.js
```

O servidor será iniciado em:

```
http://localhost:3000
```

---

# 📌 Endpoints da API

## 🔹 Testar servidor

### GET /

Retorna uma mensagem indicando que a API está funcionando.

**Resposta**

```
API rodando!
```

---

## 🔹 Listar cadastros

### GET /cadastros

Retorna todos os cadastros armazenados.

**Exemplo de resposta**

```json
[
  {
    "id": 1,
    "nome": "Thiago",
    "email": "thiago@email.com",
    "telefone": "21999999999",
    "mensagem": "Quero ajudar como voluntário"
  }
]
```

---

## 🔹 Criar novo cadastro

### POST /cadastros

Cria um novo registro no sistema.

**Body da requisição**

```json
{
  "nome": "Thiago",
  "email": "thiago@email.com",
  "telefone": "21999999999",
  "mensagem": "Quero ajudar como voluntário"
}
```

**Resposta**

```json
{
  "mensagem": "Cadastro enviado com sucesso!",
  "cadastro": {
    "id": 1,
    "nome": "Thiago",
    "email": "thiago@email.com",
    "telefone": "21999999999",
    "mensagem": "Quero ajudar como voluntário"
  }
}
```

---

# ✔ Validações implementadas

A API possui validação de dados antes de registrar um cadastro.

* Nome deve possuir **mínimo de 3 caracteres**
* Email deve possuir **formato válido**
* Telefone deve conter **10 ou 11 números**
* Mensagem pode ter **até 500 caracteres**

Caso algum dado seja inválido, a API retorna erro **400 (Bad Request)**.

---

# 🔗 Exemplo de integração com frontend

Esta API pode ser integrada a formulários de sites usando **fetch** no JavaScript.

```javascript
fetch("http://localhost:3000/cadastros", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    nome: "Thiago",
    email: "thiago@email.com",
    telefone: "21999999999",
    mensagem: "Quero participar"
  })
})
```

---

# 🔮 Melhorias futuras

* Integração com banco de dados (MySQL ou PostgreSQL)
* CRUD completo (editar e excluir cadastros)
* Autenticação de usuários
* Deploy da API
* Documentação interativa da API

---

# 👨‍💻 Autor

**Thiago Simas**

Estudante de **Análise e Desenvolvimento de Sistemas**
Desenvolvedor **Fullstack em formação**

GitHub:
https://github.com/thiagosimaswebdev
