/*
  Warnings:

  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "users";

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(320) NOT NULL,
    "display_name" VARCHAR(200),
    "first_name" VARCHAR(200),
    "last_name" VARCHAR(200),
    "country" VARCHAR(3),
    "profile_photo" BYTEA,
    "last_login" DATE,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);
