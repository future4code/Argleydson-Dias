import { Request, Response } from "express";
import { connection } from "../connection";
import { User } from "../types";

const getUserPurchases = async (req: Request, res: Response) => {
    try {
        const { user_id } = req.params

        const result: User[] = await connection("labecommerce_users")
            .where({ id: user_id })

        const user = result[0]
        if (!user) {
            throw new Error("Usuário não encontrado(user_id)")
        }

        const data = await connection("labecommerce_purchases")
            .select(
                "labecommerce_purchases.id as purchase_id",
                "labecommerce_purchases.product_id",
                "labecommerce_products.name as product_name",
                "labecommerce_products.image_url",
                "labecommerce_products.price as product_price",
                "labecommerce_purchases.quantity",
                "labecommerce_purchases.total_price"
            )
            .innerJoin(
                "labecommerce_users",
                "labecommerce_users.id",
                "labecommerce_purchases.user_id"
            )
            .innerJoin(
                "labecommerce_products",
                "labecommerce_products.id",
                "labecommerce_purchases.product_id"
            )
            .where({ user_id })

        res.status(200).send({ purchases: data })

    } catch (error: any) {
        res.status(400).send({ message: error.message })
    }
}

export default getUserPurchases