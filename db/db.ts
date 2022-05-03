import 'dotenv/config';
import { Pool, QueryResult } from 'pg';

export const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});

if (process.env.NODE_ENV !== 'test') pool.connect();

export default {
  query: async (
    text: string,
    params: (string | number | boolean)[]
  ): Promise<QueryResult> => pool.query(text, params),
  CREATE_USER: `
    INSERT INTO users (email)
    VALUES ($1)
`,
  GET_USER_BY_EMAIL: `
    SELECT id from users
    WHERE email = $1
`,
  UPDATE_USER: `
    UPDATE users
    SET email = $1, display_name = $2, first_name = $3, last_name = $4
    WHERE id = $5
  `,
};
