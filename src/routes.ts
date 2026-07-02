import Router from  "express"
import Clientes from "./routes/clientes"
import produtos from "./routes/produtos"
import fornecedor from "./routes/fornecedor"
import compra from "./routes/compra"
import pedidos from "./routes/pedidos"
import usuario from "./routes/usuario"
import estoque from "./routes/estoque"
import dashboard from "./routes/dashboard"

const routes = Router()
routes.use("/cliente", Clientes)
routes.use("/produto", produtos)
routes.use("/fornecedores", fornecedor)
routes.use("/compra", compra)
routes.use("/pedidos", pedidos)
routes.use("/usuario", usuario)
routes.use("/estoque", estoque)
routes.use("/dashboard", dashboard)


export default routes