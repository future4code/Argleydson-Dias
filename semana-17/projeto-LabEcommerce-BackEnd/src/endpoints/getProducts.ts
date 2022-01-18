import { connection } from "../connection";
import { Response, Request } from "express";
import { Product } from "../types";

const getProducts = async (req: Request, res: Response) => {
    try {
        const product: Product[] = await connection("labecommerce_products")
        res.send(product)
    } catch (error: any) {
        res.status(400).send({message: error.message})
    }
}

export default getProducts