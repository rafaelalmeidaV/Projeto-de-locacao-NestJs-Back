-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Locacao" (
    "idLocacao" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idCliente" INTEGER NOT NULL,
    "idImovel" INTEGER NOT NULL,
    "dataInicio" TEXT NOT NULL,
    "dataFim" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    CONSTRAINT "Locacao_idCliente_fkey" FOREIGN KEY ("idCliente") REFERENCES "Clientes" ("idCliente") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Locacao_idImovel_fkey" FOREIGN KEY ("idImovel") REFERENCES "Imoveis" ("idImovel") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Locacao" ("dataFim", "dataInicio", "idCliente", "idImovel", "idLocacao", "status") SELECT "dataFim", "dataInicio", "idCliente", "idImovel", "idLocacao", "status" FROM "Locacao";
DROP TABLE "Locacao";
ALTER TABLE "new_Locacao" RENAME TO "Locacao";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
