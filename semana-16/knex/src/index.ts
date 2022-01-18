// import { Request, Response } from "express"
// import app from "./app"
// import connection from "./connection"

// // Esse arquivo seria o index.ts
// const getActorById = async (id: string): Promise<any> => {
//   const result = await connection.raw(`
//     SELECT * FROM Actor WHERE id = '${id}'
//   `)

// 	return result[0][0]
// }

// // Assim a chamada funciona fora dos endpoints com .then()/.catch
// getActorById("001")
// 	.then(result => {
// 		console.log(result)
// 	})
// 	.catch(err => {
// 		console.log(err)
// 	});

// // Assim a chamada funciona fora dos endpoints com await
// (async () => {
//   console.log(await getActorById("001") )
// })()

// // Ou então podemos chamá-la dentro de um endpoint
// app.get("/users/:id", async (req: Request, res: Response) => {
//   try {
//     const id = req.params.id

//     console.log(await getActorById(id))

//     res.end()
//   } catch (error:any) {
// 		console.log(error.message)
//     res.status(500).send("Unexpected error")
//   }
// }) // bata no http://localhost:3003/users/001 e veja o que acontece no terminal

import {Request, Response } from "express";
import app from "./app"
import connection from "./connection"
import { AddressInfo } from "net";

// endpoint para testar o servidor
app.get("/", (req:Request, res: Response) => {
  res.send("Hello from Express!")
})

//---------- KNEX RAW ----------
// endpoint para buscar os atores e atrizes usando o método RAW
app.get("/actor", async (req:Request, res:Response)=>{
  try{
      const result = await connection.raw(`
      SELECT * FROM Actor;
      `)
  res.status(200). send(result[0])

  } catch(error:any){
      console.log(error.message);
      res.status(500).send (error.sqlMessage || error.message)
  }
});

// endpoint para criar um ator com o uso do método RAW.
app.post("/actor", async (req: Request, res: Response) => {
  try{
      await connection.raw(`
      INSERT INTO Actor
      (id, name, salary, birth_date, gender)
      VALUES
      (
          ${Date.now().toString()},
          "${req.body.name}",
          ${req.body.salary},
          "${req.body.birth_date}",
          "${req.body.gender}"
      );
      `)
      res.status(201). send("O ator foi criado!")

  } catch(error:any){
      console.log(error.message);
      res.status(500).send (error.sqlMessage || error.message)
  }
});


//---------- KNEX QUERY BUILDER ----------

// endpoint para consultar atores e atrizes com o uso do método QUERY BUILDER.
// consulta/query
const getActors = async () => {
  const resultado = await connection("Actor")
  return resultado
}

app.get("/actorQueryBuilder", async (req:Request, res:Response)=>{
  try{
      const resultado = await getActors()
      res.status(200).send(resultado)

  } catch(error:any){
      console.log(error.message);
      res.status(500).send (error.sqlMessage || error.message)
  }
});

// endpoint para deletar atores e atrizes com o uso do método QUERY BUILDER.
// Precisamos passar o ID como parâmetro com o uso dos dois pontos depois da barra ":"
app.delete("/actorQueryBuilder/:id", async (req:Request, res:Response)=> {
  try{
      await connection("Actor")
      .delete()
      .where({id: req.params.id})
      res.status(200).send("O ator foi deletado!")

  }catch(error:any){
      console.log(error.message);
      res.status(500).send (error.sqlMessage || error.message)
  }
});

// endpoint para atualizar atores e atrizes com o uso do método QUERY BUILDER.
app.put("/actorQueryBuilder/:id", async (req:Request, res:Response)=>{
  try {
      await connection("Actor")
      .update({
          name:req.body.name,
          salary:req.body.salary,
          birth_date: req.body.birth_date,
          gender: req.body.gender
      })
      .where({id:req.params.id})
      res.status(200).send("Ator foi atualizado!")
  }catch(error:any){
      console.log(error.message);
      res.status(500).send (error.sqlMessage || error.message)
  }
});

// endpoint para criar atores e atrizes com o uso do método QUERY BUILDER.
app.post("/actorQueryBuilder", async (req: Request, res: Response) => {
  try{
      await connection("Actor")
      .insert({
          id: Date.now().toString(),
          name:req.body.name,
          salary:req.body.salary,
          birth_date: req.body.birth_date,
          gender: req.body.gender
      })
      res.status(201). send("O ator foi criado!")

  } catch(error:any){
      console.log(error.message);
      res.status(500).send (error.sqlMessage || error.message)
  }
});

