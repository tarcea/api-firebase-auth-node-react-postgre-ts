import express, { NextFunction, Request, Response, Router } from 'express';
import { handleErrors } from '../env.management';
import { verifyToken } from '../firebase/checkToken';
import { logger } from '../logger';
import path from 'path';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';

const router = Router();

export const use =
  (
    fn: (
      arg0: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
      arg1: Response<any, Record<string, any>>,
      arg2: NextFunction
    ) => any
  ) =>
  (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };

const mainRoute = (req: Request, res: Response) => {
  const route = req.originalUrl;
  logger(route, __filename).info({
    message: 'this is just an info...',
  });
  logger(route, __filename).warn({
    message: 'this is just a test for debugging log',
  });
  const { token, user_id, email, err } = res.locals;
  return res
    .status(200)
    .json({ token, user_id, email, message: 'hello world' });
};

router.get('', use(verifyToken), use(mainRoute));

export default router;
