export const handleErrors = (error: unknown) => {
  if (error instanceof Error) {
    !process.env.NODE_ENV ||
    process.env.NODE_ENV === 'test' ||
    process.env.NODE_ENV === 'development'
      ? error.message
      : 'something went wrong';
  } else {
    return String(error);
  }
};

export const handleDB = () =>
  process.env.NODE_ENV === 'test'
    ? process.env.DB_TEST_DATABASE
    : process.env.DB_DATABASE;
