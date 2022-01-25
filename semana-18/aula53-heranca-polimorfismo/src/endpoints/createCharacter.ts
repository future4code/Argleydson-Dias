import { Request, Response } from "express"

import { CharacterDatabase } from "../data/CharacterDatabase"
import { Character } from "../types";

export default async function createCharacter(
   req: Request,
   res: Response
): Promise<void> {

   try {
      const { name, gender, description } = req.body
      const cdb = new CharacterDatabase();
      const characterToBeCreated = new Character(name, gender, description);

      await cdb.create(characterToBeCreated);

      res.status(201).end()
   } catch (error) {
      res.status(500).end()
   }
}
