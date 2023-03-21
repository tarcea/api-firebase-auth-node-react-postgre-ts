import express, { NextFunction, Request, Response, Router } from 'express';
import { handleErrors } from '../env.management';
import { verifyToken } from '../firebase/checkToken';
import { logger } from '../logger';
import path from 'path';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';
import { nextTick } from 'process';

const router = Router();

export const use =
  (fn: (req: Request, res: Response, next: NextFunction) => any) =>
  (req: Request, res: Response, next: NextFunction) => {
    const route = req.originalUrl;
    const filename = __filename;
    Promise.resolve(fn(req, res, next)).catch((err) => {
      const log = { err, route, filename };
      next(log);
    });
  };

const mainRoute = (req: Request, res: Response, next: NextFunction) => {
  const route = req.originalUrl;
  const log = { route, filename: __filename };
  try {
    logger(route, __filename).info({
      message: 'this is just an info...',
    });
    logger(route, __filename).warn({
      message: 'this is just a test for debugging log',
    });

    const { token, user_id, email } = res.locals;

    return res
      .status(200)
      .json({ token, user_id, email, message: 'hello world' });
  } catch (err) {
    next({ ...log, err });
  }
};

router.get('', verifyToken, mainRoute);

export default router;
