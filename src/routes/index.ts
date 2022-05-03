import express, { Request, Response, Router } from 'express';
import { verifyToken } from '../firebase/checkToken';

const router = Router();

router.get('', verifyToken, (req: Request, res: Response) => {
  try {
    const { token, user_id, email } = res.locals;
    res.json({ token, user_id, email, message: 'hello world' });
  } catch (err) {
    res.status(500).json(err);
  }
});
export default router;
