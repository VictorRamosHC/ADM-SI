import { Router } from "express";
import { prisma } from "../prisma";

const router = Router();

router.get("/", async (req, res) => (
    res.json(await prisma.compra.findMany({
        include: {
            fornecedor: true
    }}))
))

router.post("/", async (req, res) => {
    const compra = await prisma.compra.create({
        data: req.body
    })
    
    res.json(compra)
})

export default router
