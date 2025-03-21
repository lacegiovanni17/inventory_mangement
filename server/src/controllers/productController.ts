import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getProducts = async (req: Request, res: Response): Promise<void> => {
    try {
        const search = req.query.search?.toString();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error/ Error retrieving products" });
    }
}