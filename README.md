# 📊 ADM-SI — Sistema de Administração

[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-blue?logo=typescript)](https://typescriptlang.org)
[![Express](https://img.shields.io/badge/Express-5.2-000?logo=express)](https://expressjs.com)
[![Prisma](https://img.shields.io/badge/Prisma-7.8-2D3748?logo=prisma)](https://prisma.io)
[![SQLite](https://img.shields.io/badge/SQLite-6.x-003B57?logo=sqlite)](https://www.sqlite.org)

> Sistema de administração de empresas desenvolvido durante as aulas de **Administração de Sistemas de Informação** no Instituto Formar.

---

## ✨ O que é

Um CRUD completo para gestão empresarial com **backend em Express + Prisma** e banco **SQLite**. Gerencia clientes, produtos, estoque, fornecedores, pedidos, compras e um dashboard com métricas.

---

## 🛠️ Stack

| Camada | Tecnologia |
|--------|------------|
| **Runtime** | Node.js + TypeScript 6.0 |
| **Framework** | Express 5.2 |
| **ORM** | Prisma 7.8 |
| **Banco** | SQLite (via better-sqlite3) |
| **Dev** | tsx (watch mode) |

---

## 📦 Rotas da API

| Método | Rota | Descrição |
|--------|------|-----------|
| `GET/POST` | `/clientes` | CRUD de clientes |
| `GET/POST` | `/produtos` | CRUD de produtos |
| `GET/POST` | `/fornecedores` | CRUD de fornecedores |
| `GET/POST` | `/estoque` | Controle de estoque |
| `GET/POST` | `/pedidos` | Gestão de pedidos |
| `GET/POST` | `/compras` | Registro de compras |
| `GET` | `/dashboard` | Métricas e resumo |

---

## 🗃️ Models (Prisma Schema)

```
Cliente → Pedido → ItemPedido
Produto → Estoque
Fornecedor → Compra
Usuario (auth)
```

---

## 🚀 Como rodar

```bash
# 1. Instalar dependências
npm install

# 2. Gerar cliente Prisma + migrar
npx prisma generate
npx prisma migrate dev

# 3. Rodar em dev (com watch)
npm run dev
```

---

## 📁 Estrutura

```
ADM-SI/
├── prisma/
│   ├── schema.prisma       ← models e config do banco
│   └── migrations/         ← histórico de migrações
├── src/
│   ├── server.ts           ← entry point (Express)
│   ├── routes.ts           ← rotas index
│   ├── prisma.ts           ← instância do Prisma
│   └── routes/
│       ├── clientes.ts
│       ├── produtos.ts
│       ├── fornecedor.ts
│       ├── estoque.ts
│       ├── pedidos.ts
│       ├── compra.ts
│       ├── dashboard.ts
│       └── usuario.ts
├── types/
│   └── index.ts            ← tipos compartilhados
├── package.json
└── tsconfig.json
```

---

## 🌐 Repos relacionados

- **[frontend-adm-si](https://github.com/VictorRamosHC/frontend-adm-si)** — frontend deste sistema

---

> Projeto acadêmico · Instituto Formar
