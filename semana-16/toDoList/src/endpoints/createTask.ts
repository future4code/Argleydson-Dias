import { Request, Response } from "express";
import moment from "moment";
import insertTask from "../data/insertTask";

export default async function createTask(
  req:Request,
  res:Response
){
  try {
    // validar entradas da requisição
    if(
      !req.body.title ||
      !req.body.description ||
      !req.body.limit_date ||
      !req.body.creator_user_id
      ){
          throw new Error("Todos os campos são obrigatórios!")
      }
        // verificação se a data da task não é anterior ao dia atual. Unix é pra converter pro time stemp
     const dateDiff: number = moment(req.body.limit_date, "DD/MM/YYYY").unix() - moment().unix()
    //  console.log(dateDiff)
     if (dateDiff <= 0) {
         throw new Error("Prazo deve ser uma data futura!")               
    }   

    // consulta o banco de dados
    const id:string = Date.now() + Math.random().toString();
    await insertTask(
        id,
        req.body.title,
        req.body.description,
        moment(req.body.limit_date, "DD/MM/YYYY").format("YYYY-MM-DD"),
        req.body.creator_user_id
    )

    // validar as saídas do banco

    // responder a requisição utilizando ".send" ou ".end"
    res.status(200).send({
      message:"Tarefa criada com sucesso!", 
      id      
    })

  } catch (error:any) {
    res.status(400).send({
      message: error.message || error.sqlMessage
    })
  }
}