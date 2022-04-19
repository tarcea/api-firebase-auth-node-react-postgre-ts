import express, { Request, Response } from 'express';
import { verifyToken } from './firebase/checkToken';

const app = express();
app.use(express.json());
app.use(verifyToken);

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'hello world' });
});
export default app;
