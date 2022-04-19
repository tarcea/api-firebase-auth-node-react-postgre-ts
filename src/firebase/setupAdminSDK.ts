import * as admin from 'firebase-admin';

const params = {
  type: process.env.SDK_TYPE,
  projectId: process.env.SDK_PROJECT_ID,
  privateKeyId: process.env.SDK_PRIVATE_KEY_ID,
  privateKey: process.env.SDK_PRIVATE_KEY,
  clientEmail: process.env.SDK_CLIENT_EMAIL,
  clientId: process.env.SDK_CLIENT_ID,
  authUri: process.env.SDK_AUTH_URI,
  tokenUri: process.env.SDK_TOKEN_URI,
  authProviderX509CertUrl: process.env.SDK_AUTH_PROVIDER_X509_CERT_URL,
  clientC509CertUrl: process.env.SDK_CLIENT_X509_CERT_URL,
};

export const firebaseInit = admin.initializeApp({
  credential: admin.credential.cert(params),
});
