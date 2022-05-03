import db from './db';

export const createUser = async (email: string) => {
  await db.query(db.CREATE_USER, [email]);
};

export const getUserByEmail = async (email: string) => {
  const { rows } = await db.query(db.GET_USER_BY_EMAIL, [email]);
  return rows;
};
