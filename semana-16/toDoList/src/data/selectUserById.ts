import { connection } from "../index";

export default async function selecUserById(
  id:string  
  ) {
    // esta devolve um resultado e por isso devo criar uma variável pra guarda-lo (result)
    // não prefica do .from pq já coloquei o ('ToDoListUser')
    const result = await connection('ToDoListUser')
      .select('*')
      .where({id})

    // [0] retorna só o objeto ao invés de um obj dentro de um array
    return result[0]
}