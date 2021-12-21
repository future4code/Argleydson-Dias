import { Request, Response } from "express";
import insertUser from "../data/insertUser";

export default async function createUser(
  req:Request,
  res:Response
){
  try {
    // validar entradas da requisição
    if(
      !req.body.name ||
      !req.body.nickname ||
      !req.body.email
    ){ 
      res
        .status(400)
        .send('Preencha os campos "name", "nickname" e email')
    }

    // criar um id. usar time stemp pq ele dá o tempo em milisegundos e dificilmente alguém vai criar um usuário ao mesmo tempo. Add um número aleatório só pra aumentar a probablidade de ser um id único
    const id: string = Date.now() + Math.random().toString()

    // consulta o banco de dados, importante usar o await para consultar o banco
    await insertUser(
      id,
      req.body.name, 
      req.body.nickname, 
      req.body.email
    )

    // validar as saídas do banco
      //  não teve saídas 

    // responder a requisição utilizando ".send" ou ".end"
    res
        .status(200)
        .send('Usuário criado com sucesso!')

  } catch (error:any) {
    res.status(400).send({
      message: error.message || error.sqlMessage
    })
  }
}