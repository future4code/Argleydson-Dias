import { connection } from "../index";


export default async function insertTask (
    id: string,
    title: string,
    description: string,
    limit_date: string,
    creator_user_id: string
) {
    await connection("ToDoListTask")
    .insert({
        id,
        title,
        description,
        limit_date,
        creator_user_id
    })
}