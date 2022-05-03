import { Router, Request, Response } from 'express';
import { handleErrors } from '../env.management';
import { verifyToken } from '../firebase/checkToken';
import { customClaims } from '../firebase/firebaseActions';
import errors from '../messageList/errors';
import infos from '../messageList/infos';
import validator from '../validator';

const router = Router();

/*
  RequestType: POST
  Description: A path to alocate roles for users (admin, user, etc)
  ChangesTables: 
*/
router.post('', verifyToken, async (req: Request, res: Response) => {
  try {
    const { uid, claimRole } = req.body;
    const { error } = validator.claimSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.message });
    }
    const { role } = res.locals;
    if (role !== 'admin') {
      return res
        .status(403)
        .json({ message: errors.ACCESS_RESTRICTED.message });
    }
    await customClaims(uid, claimRole);

    res.status(201).json({ message: infos.ROLE_ADDED.message });
  } catch (err) {
    res.status(500).json({ message: handleErrors(err) });
  }
});

export default router;
