import { Request, Response } from "express";
import { connection } from "../connection";
import { Product, Purchase, User } from "../types";

const createPurchases = async (req: Request, res: Response) => {
    try {
        const { product_id, user_id, quantity } = req.body

        // modo mais completo
        const result: User[] = await connection("labecommerce_users")
            .select()
            .where({ id: user_id })

        const user = result[0]

        if (!user) {
            throw new Error("Usuário não encontrado(user_id)")
        }

        // modo mais enxuto
        const [product]: Product[] = await connection("labecommerce_products")
            .select()
            .where({ id: product_id })

        if (!product) {
            throw new Error("Produto não encontrado(product_id)")
        }

        const total_price = product.price * quantity

        const purchase: Purchase = {
            id: Date.now().toString(),
            product_id,
            user_id,
            quantity,
            total_price
        }

        await connection("labecommerce_purchases").insert(purchase)

        res.status(200).send({ message: "Compra realizada com sucesso!" })
    } catch (error: any) {
        res.status(400).send({ message: error.message })
    }
}

export default createPurchases