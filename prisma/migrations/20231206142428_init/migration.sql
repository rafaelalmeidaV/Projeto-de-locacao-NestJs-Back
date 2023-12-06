-- CreateTable
CREATE TABLE "Imoveis" (
    "idImovel" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tipo" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "valor" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "Clientes" (
    "idCliente" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Locacao" (
    "idLocacao" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idCliente" INTEGER NOT NULL,
    "idImovel" INTEGER NOT NULL,
    "dataInicio" DATETIME NOT NULL,
    "dataFim" DATETIME NOT NULL,
    "status" TEXT NOT NULL,
    CONSTRAINT "Locacao_idCliente_fkey" FOREIGN KEY ("idCliente") REFERENCES "Clientes" ("idCliente") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Locacao_idImovel_fkey" FOREIGN KEY ("idImovel") REFERENCES "Imoveis" ("idImovel") ON DELETE RESTRICT ON UPDATE CASCADE
);
