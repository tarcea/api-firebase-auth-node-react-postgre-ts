import Joi from 'joi';

export default {
  userSchema: Joi.object({
    email: Joi.string().email().max(320).required(),
    display_name: Joi.string().max(200),
    first_name: Joi.string().max(200),
    last_name: Joi.string().max(200),
    country: Joi.string().max(3),
    preferred_language: Joi.string().max(20),
    profile_photo: Joi.string().max(500),
    timezone_id: Joi.number().strict(),
    last_login: Joi.date(),
    billing_details_id: Joi.number().strict(),
  }),

  claimSchema: Joi.object({
    uid: Joi.string().min(20).max(200),
    claimRole: Joi.string().min(3).max(200),
  }),
};
