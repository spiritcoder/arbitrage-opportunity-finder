import express from 'express';
import 'express-async-errors' //for catching async errrors in express
import { json } from 'body-parser';
import dotenv from 'dotenv';
import cookieSession from 'cookie-session'
import cors from 'cors';

// //require those routes which I created seperately
import { authRoutes } from './routes/auth';
import { arbiterRoutes } from './routes/arbiter';


import { errorHandler } from './middlewares/error-handler'
import { NotFoundError } from './errors/not-found-error'

const app = express();
app.set('trust proxy', true)
app.use(json());
app.use(
  cookieSession({
    signed:false
  })
)
app.use(cors());
dotenv.config();



//Routes imported here
app.use('/api/auth', authRoutes);
app.use('/api/arbiter', arbiterRoutes);

app.all('*', () => {
  throw new NotFoundError()
})

app.use(errorHandler)


export {app}