import express, {Express, Request, Response} from "express";
import cors from "cors";
import { accounts} from "./accounts"

const app: Express = express();

app.use(express.json());
app.use(cors());

app.post("/users/create", (req: Request, res: Response) => {
    try {
        const {name, CPF, dateString} = req.body
        
        const [day, month, year] = dateString.split("/")

        const dateOfBirth: Date = new Date(`${year}-${month}-${day}`)

        const age: number = Date.now() - dateOfBirth.getTime()
        const ageInYears: number = age / 1000 / 60 / 60/ 24 / 365

        if(ageInYears < 18) {
            res.statusCode = 404
            throw new Error("Idade deve ser maior que 18 anos para criar a conta no LabeBank")
        }

        accounts.push({
            name,
            CPF,
            dateOfBirth,
            balance: 0,
            statement:[]
        });

        res.status(201) .send("Conta criada com sucesso! Bem vindo ao LabeBank")
    } catch (error:any) {
        console.log(error)
        res.send(error.message)
    }
});

app.get("/users", (req:Request, res: Response)=>{
    try {
        if(!accounts.length){
            res.statusCode = 404
            throw new Error ("Nenhuma conta encontrada")
        }
        res.status(200) .send(accounts)
        
    } catch (error:any) {
        console.log(error)
        res.send(error.message)
    }
});

app.listen(3003, ()=>{
    console.log("Servidor rodando na porta 3003")
})
