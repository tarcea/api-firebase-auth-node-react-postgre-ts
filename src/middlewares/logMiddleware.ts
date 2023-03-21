import { NextFunction, Request, Response } from 'express';
import { handleErrors } from '../env.management';
import { logger } from '../logger';

export const logMiddleware = (
  log: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // console.log(res.locals);
  // const { route, filename } = res.locals;
  const { err, route, filename } = log;
  logger(route, filename).error(err.message);
  res.status(err.statusCode || 500).json({ message: handleErrors(err) + 111 });
};
