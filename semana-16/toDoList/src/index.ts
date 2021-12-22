import express from "express"
import knex from "knex"
import dotenv from "dotenv"
import createUser from "./endpoints/createUser"
import getUserById from "./endpoints/getUserById"
import editUser from "./endpoints/editUser"

dotenv.config()

export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA,
    port: 3306,
    multipleStatements: true
  }
})

const app = express()
app.use(express.json()) //transforma o boddy da resposta pra um formato de json e poder exibir no navegador

// endpoint para criar usuário
app.put("/user", createUser)

// endpoint para pegar usuário pelo id
app.get('/user/:id', getUserById)

// endpoint para editar usuário pelo id
app.post('/user/edit/:id', editUser)


app.listen(3003, ()=>{
  console.log("Servidor rodando na porta 3003")
})
