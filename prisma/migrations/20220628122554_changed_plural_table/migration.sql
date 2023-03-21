-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(320) NOT NULL,
    "display_name" VARCHAR(200),
    "first_name" VARCHAR(200),
    "last_name" VARCHAR(200),
    "country" VARCHAR(3),
    "profile_photo" BYTEA,
    "last_login" DATE,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);
