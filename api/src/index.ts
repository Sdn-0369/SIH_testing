import express, { Express } from 'express';
import dotenv from 'dotenv';
import authRouter from './auth';


dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/auth', authRouter);

app.listen(PORT, () => {
  console.log(` Server is running on port ${PORT}`);
});