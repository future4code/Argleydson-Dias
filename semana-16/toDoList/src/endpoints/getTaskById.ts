import {Request, Response} from "express";
import moment from "moment";
import { selectTaskById } from "../data/selectTaskById";

export const getTaskById = async (req: Request, res: Response) => {

    try {
        // passo 1 - validar entradas da requisição
        if(!req.params.id){
            throw new Error("Insira o ID!")
        }

        // passo 2 - consultar o banco de dados        
        const result  = await selectTaskById(req.params.id)

        // passo 3 - validar as saídas do banco
        if(!result){
            throw new Error("Tarefa não encontrada!")
        }

        // passo 4 - responser a requisição utilizando ".send" ou ".end"
        res.status(200).send({
            ...result,
            limit_date: moment(result.limit_date, "YYYY-MM-DD").format("DD/MM/YYYY")})

    } catch (error:any) {
        res.status(400).send(error.message || error.sqlMessage)
    }
}