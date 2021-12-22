import { Request, Response } from "express";
import updateUser from "../data/updateUser";

export default async function editUser(
  req:Request,
  res:Response
){
  try {
    // validar entradas da requisição
    if(
      req.body.name === '' ||
      req.body.nickname === '' ||
      req.body.email === ''
    ){
      res.status(400).send({
        message: 'Nenhum dos campos pode estar em branco.'
      })
      return
    }

    if(!req.body.name && !req.body.nickname && !req.body.email){
      res.status(400).send({
        message: 'Escolha ao menos um valor para alterar.'
      })
      return
    }

    // consulta o banco de dados
    // como não retorna nada eu não preciso criar uma variável pra guardar
    await updateUser(
      req.params.id,
      req.body.name,
      req.body.nickname,
      req.body.email
    )

    // validar as saídas do banco
      // não preciso validar saídas, não têm saídas

    // responder a requisição
    res.status(200).send({
      message: 'Usuário atualizado'
    })


  } catch (error:any) {
    res.status(400).send({
      message: error.message || error.sqlMessage
    })
  }
}