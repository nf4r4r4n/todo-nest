-- CreateTable
CREATE TABLE "Todos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
    "is_done" BOOLEAN NOT NULL,
    "created_at" DATETIME NOT NULL
);
