import express, { Application, ErrorRequestHandler } from 'express';
import { logMiddleware } from './middlewares/logMiddleware';
import router from './routes';
import users from './routes/users';
import cors from 'cors';

const app: Application = express();
app.use(cors());
app.use(express.json());
app.get('/', router);
app.use('/users', users);
app.use(logMiddleware);
export default app;
