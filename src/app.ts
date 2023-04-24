require('dotenv').config();
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

import {notFound, errorHandler} from './middlewares';
import MessageResponse from './interfaces/MessageResponse';
import userRoute from './api/routes/userRoute';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'API location: api/v1',
  });
});

app.use('/users', userRoute);

app.use(notFound);
app.use(errorHandler);

export default app;
