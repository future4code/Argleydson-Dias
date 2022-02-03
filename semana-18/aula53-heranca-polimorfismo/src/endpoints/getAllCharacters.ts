import { Request, Response } from "express"
import { testDatabase } from "..";
import { CharacterDatabase } from "../data/CharacterDatabase";
import { Character, character } from "../types"

export default async function getAllCharacters(
  req: Request,
  res: Response
): Promise<void> {

  try {
    const cdb = new CharacterDatabase();

    //  cdb.connection.destroy() // gera erro
    const characters: Character[] = await cdb.getAll();

    res.send(characters)
  } catch (error) {
    res.status(500).send("Unexpected server error")
  }
}

