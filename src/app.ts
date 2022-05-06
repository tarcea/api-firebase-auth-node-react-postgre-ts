import express, { Application, ErrorRequestHandler } from 'express';
import { errorMiddleware } from './middlewares/errorMiddleware';
import router from './routes';
import users from './routes/users';

const app: Application = express();
app.use(express.json());
app.get('/', router);
app.use('/users', users);
app.use(errorMiddleware);
export default app;
