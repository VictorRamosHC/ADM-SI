import { Router } from "express";
import { prisma } from "../prisma";
import type router from "./clientes";

const route = Router()
route.get("/", async (req, res) =>{
    res.json({
      clientes: await prisma.cliente.count(), 
    produtos: await prisma.produto.count(),
    fornecedores: await prisma.fornecedor.count(),
    pedidos: await prisma.pedido.count(),
    estoque: await prisma.estoque.count(),  
    })
})

export default route
