import { getAuth } from 'firebase-admin/auth';
import { firebaseInit } from './setupAdminSDK';

export const customClaims = async (uid: string, role: string) => {
  firebaseInit;
  const auth = getAuth();
  await auth.setCustomUserClaims(uid, { role });
};

export const getUserUidByEmail = async (email: string) => {
  firebaseInit;
  const auth = getAuth();
  const user = await auth.getUserByEmail(email);
  return user.uid;
};
