import { prisma } from '@prisma/client';
import { NextFunction, Request, Response, Router } from 'express';
import {
  createUser,
  deleteUser,
  getUserByEmail,
} from '../../db/dbPrismaActions';
import { verifyToken } from '../firebase/checkToken';
import { logger } from '../logger';

const router = Router();

router.post(
  '/signup',
  async (req: Request, res: Response, next: NextFunction) => {
    const route = req.originalUrl;
    const log = { route, filename: __filename };
    let userEmail;
    try {
      // const { email } = res.locals;
      const { email } = req.body;
      userEmail = email;
      const user = await getUserByEmail(email);
      if (user[0]) {
        logger(route, __filename).error(
          'email already registered, please login or choose another email address'
        );
        return res.status(400).json({
          message:
            'email already registered, please login or choose another email address',
        });
      }
      await createUser({ email });
      logger(route, __filename).info('user created');
      res.json({ message: 'user created' });
    } catch (err) {
      await deleteUser(userEmail);
      next({ ...log, err });
    }
  }
);

router.post(
  '/login',
  verifyToken,
  async (req: Request, res: Response, next: NextFunction) => {
    const route = req.originalUrl;
    const log = { route, filename: __filename };
    let userEmail;
    try {
      console.log(res.locals);

      res.json({ message: 'user created' });
    } catch (err) {
      next({ ...log, err });
    }
  }
);
export default router;
