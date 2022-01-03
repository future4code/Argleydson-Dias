import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import createUsers from './endpoints/createUsers'
import getUsers from "./endpoints/getUsers";
import createProducts from "./endpoints/createProducts";
import getProducts from "./endpoints/getProducts";
import createPurchases from "./endpoints/createPurchases";
import getUserPurchases from "./endpoints/getUserPurchases";

const app: Express = express();
app.use(express.json());
app.use(cors());

app.post("/users", createUsers)
app.get("/users", getUsers)

app.post("/products", createProducts)
app.get("/products", getProducts)

app.post("/purchases", createPurchases)
app.get("/users/:user_id/purchases", getUserPurchases)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});