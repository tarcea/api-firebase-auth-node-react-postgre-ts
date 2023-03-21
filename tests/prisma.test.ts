import { createUser } from '../db/dbPrismaActions';
import { prismaMock } from './../singleton';

test('should create new user ', async () => {
  const user: any = {
    id: 6,
    display_name: 'Rich',
    email: 'hello@prisma.io',
  };

  prismaMock.user.create.mockResolvedValue(user);

  await expect(createUser(user)).resolves.toEqual({
    id: 6,
    display_name: 'Rich',
    email: 'hello@prisma.io',
  });
});
