import { Request, Response } from "express";
import { CharacterDatabase } from "../data/CharacterDatabase";


export default async function deleteCharacter(
  req: Request,
  res: Response
): Promise<void> {
  try {

    const { id } = req.params

    await new CharacterDatabase().delete(id)

    res.status(200).end()

  } catch (error) {
    res.status(500).end()
  }
}
