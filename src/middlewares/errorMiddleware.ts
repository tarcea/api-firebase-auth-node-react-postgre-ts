import { NextFunction, Request, Response } from 'express';
import { handleErrors } from '../env.management';
import { logger } from '../logger';

export const errorMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger('', '').error(err.message);
  res.status(err.statusCode || 500).json({ message: handleErrors(err) });
};
