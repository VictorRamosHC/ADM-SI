import { Router } from "express";
import { prisma } from "../prisma.js";


const router = Router();


router.get("/", async (req, res) => {

    const usuario = await prisma.usuario.findMany();

    res.json(usuario);
})

router.get("/hello", async (req, res) => {

    res.json("Olá");
})

router.post("/", async (req, res) => {
    const { nome, email, senha, perfil } = req.body

    const usuario = await prisma.usuario.create({
        data: {
            nome,
            email,
            senha,
            perfil
        }
    })
    
    res.json(usuario)
}) 

export default router