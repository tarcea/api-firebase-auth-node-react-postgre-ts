import express, { Request, Response, Router } from 'express';

const router = Router();

router.get('', (req: Request, res: Response) => {
  try {
    const { token, user_id, email } = res.locals;
    res.json({ token, user_id, email, message: 'hello world' });
  } catch (err) {
    res.status(500).json(err);
  }
});
export default router;
