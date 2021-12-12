"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const accounts_1 = require("./accounts");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.post("/users/create", (req, res) => {
    try {
        const { name, CPF, dateString } = req.body;
        const [day, month, year] = dateString.split("/");
        const dateOfBirth = new Date(`${year}-${month}-${day}`);
        const age = Date.now() - dateOfBirth.getTime();
        const ageInYears = age / 1000 / 60 / 60 / 24 / 365;
        if (ageInYears < 18) {
            res.statusCode = 404;
            throw new Error("Idade deve ser maior que 18 anos para criar a conta no LabeBank");
        }
        accounts_1.accounts.push({
            name,
            CPF,
            dateOfBirth,
            balance: 0,
            statement: []
        });
        res.status(201).send("Conta criada com sucesso! Bem vindo ao LabeBank");
    }
    catch (error) {
        console.log(error);
        res.send(error.message);
    }
});
app.get("/users", (req, res) => {
    try {
        if (!accounts_1.accounts.length) {
            res.statusCode = 404;
            throw new Error("Nenhuma conta encontrada");
        }
        res.status(200).send(accounts_1.accounts);
    }
    catch (error) {
        console.log(error);
        res.send(error.message);
    }
});
app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
});
