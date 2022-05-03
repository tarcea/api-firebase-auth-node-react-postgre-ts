export default {
  INPUT_NOT_PROVIDED: {
    code: 400,
    message: 'please provide all required input',
  },
  NO_HEADER_PROVIDED: {
    code: 400,
    message: 'No header provided',
  },
  NO_TOKEN: {
    code: 400,
    message: 'No token',
  },
  INVALID_TOKEN: {
    code: 400,
    message: 'invalid token',
  },
  ACCESS_RESTRICTED: {
    code: 403,
    message: 'access restricted',
  },
  USER_NOT_FOUND: {
    code: 400,
    message: 'user not found',
  },
  PARAMETER_NOT_PROVIDED: {
    code: 400,
    message: 'parameter not provided',
  },
  MANY_PARAMETERS_PROVIDED: {
    code: 400,
    message: 'more than one parameter provided',
  },
};
