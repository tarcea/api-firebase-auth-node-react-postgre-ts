import { Request, Response, Router } from 'express';
import { createUser, getUserByEmail } from '../../db/dbActions';
import { verifyToken } from '../firebase/checkToken';

const router = Router();

router.post('', verifyToken, async (req: Request, res: Response) => {
  try {
    const { email } = res.locals;
    const user = await getUserByEmail(email);
    if (user[0]) {
      return res.status(400).json({
        message:
          'email already registered, please login or choose another email address',
      });
    }
    await createUser(email);
    res.json({ message: 'user created' });
  } catch (err) {
    res.status(500).json(err);
  }
});
export default router;
