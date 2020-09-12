import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';

import AppError from './errors/AppError';

import './config/mongoDB';

import routes from './routes';

const app = express();

const connectedUsers: any = {};

app.use((request: Request, response: Response, next: NextFunction) => {
  request.connectedUsers = connectedUsers;

  return next();
});

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('Server started on port 3333');
});
