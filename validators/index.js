import {body} from 'express-validator';

const userRegistrationValidator = () => {
    
    return [
        body('email').trim().notEmpty().withMessage("Email is required").isEmail().withMessage("Invalid email"),
        body('password').trim().notEmpty().withMessage("Password is required").isLength({min: 8}).withMessage("Password must be at least 8 characters long"),
        body("username").trim().notEmpty().withMessage("Username is required").isLength({min: 6}).withMessage("Username must be at least 6 characters long").isLength({max: 13}).withMessage("Username must be at most 13 characters long"),
        body("name").trim().notEmpty().withMessage("Name is required"),
    ]
}

const userLoginValidator = () => {
    return [
        body('email').trim().notEmpty().withMessage("Email is required").isEmail().withMessage("Invalid email"),
        body('password').trim().notEmpty().withMessage("Password is required").isLength({min: 8}).withMessage("Password must be at least 8 characters long"),
    ]
}

export {userRegistrationValidator, userLoginValidator}