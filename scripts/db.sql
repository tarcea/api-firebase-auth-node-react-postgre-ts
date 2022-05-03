CREATE TABLE IF NOT EXISTS users
(
    id                 SERIAL PRIMARY KEY NOT NULL,
    email              VARCHAR(320)       NOT NULL, 
    display_name       VARCHAR(200),
    first_name         VARCHAR(200),
    last_name          VARCHAR(200),
    country            VARCHAR(3),
    profile_photo      VARCHAR(200),
    last_login         DATE
);