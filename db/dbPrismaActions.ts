import prisma from './client';

interface CreateUser {
  display_name?: string;
  email: string;
}

export const createUser = async (user: CreateUser) => {
  return await prisma.user.create({
    data: user,
  });
};

export const getUserByEmail = async (email: string) => {
  const user = await prisma.user.findMany({
    where: { email },
    select: { id: true, email: true },
  });
  return user;
};

export const deleteUser = async (email: string) => {
  await prisma.user.deleteMany({
    where: { email },
  });
};
