import express, { Request, Response } from "express";
import cors from "cors";
import { users, UserType } from "./data";
import { User } from "./types";

const app = express();
app.use(express.json());
app.use(cors());

//EXERCÍCIO 01
//A) Utilizar o método GET
//B) "/users"

//Endpoint 1
app.get("/users", (req: Request, res: Response) => {
  try {
    if (users.length === 0) {
      throw new Error("Array vazio!nenhum usuário");
    }
    res.status(200).send(users);
  } catch (error: any) {}
});

//EXERCÍCIO 02 

app.get("/users/:type", (req: Request, res: Response) => {
  let codeError: number = 400;
  try {
    const type: string = req.params.type.toUpperCase() as string;

    if (type in UserType) {
      const userType: User[] = users.filter((user) => {
        return user.type === type;
      });
      res.status(200).send(userType);
    } else {
      throw new Error("Type não encontrado");
    }
  } catch (error: any) {
    res.status(codeError).send({ message: error.message });
  }
});

//A) Criando o types.ts


//B) usando o UserType, está no types.ts


//EXERCÍCIO 03

app.get("/users", (req: Request, res: Response) => {
  let codeError: number = 400;
  try {
    const name: string = req.query.name as string;
    const user: User | undefined = users.find((user) => user.name === name);
    if (!user) {
      codeError = 404;
      throw new Error("User not found");
    }
    res.status(200).send(user);
  } catch (error: any) {
    res.status(codeError).send({ message: error.message });
  }
});

app.get("/users/:id", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const id: number = Number(req.params.id);

    if (isNaN(id)) {
      errorCode = 422; //unprocessable entity
      throw new Error("Invalid value for id. Please send a number.");
    }

    const user = users.find((user) => {
      return user.id === id;
    });

    if (!user) {
      errorCode = 404;
      throw new Error("User not found.");
    }

    res.status(200).send(user);
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});


//EXERCÍCIO 04

app.post("/users", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const { id, name, email, type, age } = req.body;

    if (!id || !name || !email || !type || !age) {
      errorCode = 422;
      throw new Error("Please check the fields!");
    }
    const newUser: User = {
      id: id,
      name: name,
      email: email,
      type: type,
      age: age,
    };

    users.push(newUser);
    res.status(201).send({ message: "User created successefully" });
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

app.patch("/users", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const { id, name, email, type, age } = req.body;

    if (!id || !name || !email || !type || !age) {
      errorCode = 422;
      throw new Error("Please check the fields!");
    }
    const newUser: User = {
      id: id,
      name: name,
      email: email,
      type: type,
      age: age,
    };

    users.push(newUser);
    res.status(201).send({ message: "User created successefully" });
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!");
});

app.listen(3003, () => {
  console.log("Servidor aberto na porta 3003");
});
