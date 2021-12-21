import { Request, Response } from "express";

export default async function createUser(
  req:Request,
  res:Response
){
  try {
    // validar entradas da requisição

    // consulta o banco de dados

    // validar as saídas do banco

    // responder a requisição
  } catch (error:any) {
    res.status(400).send({
      message: error.message || error.sqlMessage
    })
  }
}