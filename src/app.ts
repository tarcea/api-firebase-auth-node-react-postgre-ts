import express, { Request, Response } from 'express';
import { verifyToken } from './firebase/checkToken';

const app = express();
app.use(express.json());
app.use(verifyToken);

app.get('/', (req: Request, res: Response) => {
  const { token, user_id, email } = res.locals;
  res.json({ token, user_id, email, message: 'hello world' });
});
export default app;
