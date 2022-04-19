import { NextFunction, Request, Response } from 'express';
import { getAuth } from 'firebase-admin/auth';
import { firebaseInit } from './setupAdminSDK';

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    firebaseInit;
    const auth = getAuth();
    if (!req.headers.authorization) {
      return res
        .status(400)
        .json({ message: 'errors.NO_HEADER_PROVIDED.message' });
    }
    const tokenString = req.headers.authorization.split(' ');
    if (tokenString.length < 2) {
      return res.status(400).json({ message: 'errors.NO_TOKEN.message' });
    }

    const user = await auth.verifyIdToken(tokenString[1]);

    if (!user) {
      return res.status(400).json({ message: 'errors.INVALID_TOKEN.message' });
    }
    res.locals.token = tokenString[1];
    res.locals.user_id = user.uid;
    res.locals.email = user.email;
    next();
  } catch (err) {
    res.status(500).json({});
    next(err);
  }
};
