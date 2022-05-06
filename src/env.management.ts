import 'dotenv/config';

export const handleErrors = (error: any) => {
  // if (error instanceof Error) {
  return !process.env.NODE_ENV ||
    process.env.NODE_ENV === 'test' ||
    process.env.NODE_ENV === 'development'
    ? error.message
    : 'something went wrong';
  // } else {
  //   return String(error);
  // }
};

export const handleDB = () =>
  process.env.NODE_ENV === 'ghauth_test'
    ? process.env.DB_TEST_DATABASE
    : process.env.DB_DATABASE;
