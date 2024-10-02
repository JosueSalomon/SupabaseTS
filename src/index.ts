import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import userRouter from './Routes/Usuario.routes'

dotenv.config();
const app: Express = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({extended:true}));

app.use('/user', userRouter);

app.get('/', (req: Request, res: Response) => {
    res.send('Root Server on');
});

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto: ${port}`);
});

