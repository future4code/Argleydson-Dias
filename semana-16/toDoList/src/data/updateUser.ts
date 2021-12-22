import { connection } from "../index"

export default async function updateUser(
  id: string,
  name?: string,
  nickname?: string,
  email?: string
){
  if (name){
    await connection.raw(`
        UPDATE ToDoListUser
        SET name = '${name}'
        WHERE id = '${id}';    
    `)
  }

  if (nickname){
    await connection.raw(`
        UPDATE ToDoListUser
        SET nickname = '${nickname}'
        WHERE id = '${id}';    
    `)
  }

  if (email){
    await connection.raw(`
        UPDATE ToDoListUser
        SET email = '${email}'
        WHERE id = '${id}';    
    `)
  }
}