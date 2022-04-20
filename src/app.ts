import express, { Request, Response, Application } from 'express';
import router from '../routes';
import { verifyToken } from './firebase/checkToken';

const app: Application = express();
app.use(express.json());
app.use(verifyToken);

app.get('/', router);
export default app;
