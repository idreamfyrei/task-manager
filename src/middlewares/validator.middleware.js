import {validationResults} from 'express-validator';
import ApiError from "../utils/api-error.js";

export const validate = (req, res, next) => {
   const errors = validationResults(req);

   if (errors.isEmpty()) {
       return next();
   } 

   const extractedErrors = []
   errors.array().map(err => extractedErrors.push({[err.path]: err.msg}));

   throw new ApiError(422, "Validation Failed", extractedErrors);
} 