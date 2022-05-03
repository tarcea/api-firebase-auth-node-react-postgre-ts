import express, { Application } from 'express';
import router from './routes';
import users from './routes/users';

const app: Application = express();
app.use(express.json());

app.get('/', router);
app.use('/users', users);
export default app;
