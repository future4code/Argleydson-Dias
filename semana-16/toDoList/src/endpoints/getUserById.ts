import { Request, Response } from "express";
import selecUserById from "../data/selectUserById";

export default async function getUserById(
  req:Request,
  res:Response
){
  try {
    // validar entradas da requisição
      // não precisa pq só recebo um id por path params

    // consulta o banco de dados
    // criar uma constante pra guardar o resultado
    const user = await selecUserById(req.params.id)

    if(!user){
      res.status(404).send({
        message: 'Usuário não encontrado!'
      })
      return
    }
    
    // validar as saídas do banco

    // responder a requisição
    // se eu receber um usuário
    res.status(200).send({
      message: 'Sucesso!',
      id: user.id,
      nickname: user.nickname
    })



  } catch (error:any) {
    res.status(400).send({
      message: error.message || error.sqlMessage
    })
  }
}