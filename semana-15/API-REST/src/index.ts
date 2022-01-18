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
// a. Como você passou os parâmetros de type para a requisição? Por quê?
//   Via query params, pq é opcional passá-los

//B) usando o UserType, está no types.ts
// b. Você consegue pensar em um jeito de garantir que apenas `types` válidos sejam utilizados?
//   Sim, fazendo a validação


//EXERCÍCIO 03
// a. Qual é o tipo de envio de parâmetro que costuma ser utilizado por aqui?
//   Query params


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

// 4
// a. Mude o método do endpoint para `PUT`. O que mudou?
//   A funcionalidade não mudou porque quem dita o que ocorre é o código no handler, o que muda é a semântica do verbo/método na documentação da API e se ela segue os padrões estabelecidos pela comunidade

// b. Você considera o método `PUT` apropriado para esta transação? Por quê?
//   Não, porque a convenção dita que novos itens em entidades sejam aplicados pelo POST, enquanto PUT e PATCH sejam utilizados para edição completa e parcial, respectivamente
app.put("/users/:id", (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id)

    if (isNaN(id)) {
      throw new Error("Invalid id")
    }

    users.forEach(user => {
      if (user.id === id) {
        user.name += "-ALTERADO"
        return res.status(200).end()
      }
    })
    res.status(204).send("User not found")
  } catch (err: any) {
    res.status(400).send(err.message)
  }
})

app.patch("/users/:id", (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id)

    if (isNaN(id)) {
      throw new Error("Invalid id")
    }

    users.forEach(user => {
      if (user.id === id) {
        user.name += "-REALTERADO"
        return res.status(200).end()
      }
    })
    res.status(204).send("User not found")
  } catch (err: any) {
    res.status(400).send(err.message)
  }
})

app.delete("/users/:id", (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id)

    if (isNaN(id)) {
      throw new Error("Invalid id")
    }

    for (let i = 0; i < users.length; i++) {
      if (users[i].id === id) {
        users.splice(i, 1)
        return res.status(200).end()
      }
    }

    res.status(204).send("User not found")
  } catch (err: any) {
    res.status(400).send(err.message)
  }
})

// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!");
});

app.listen(3003, () => {
  console.log("Servidor aberto na porta 3003");
});
