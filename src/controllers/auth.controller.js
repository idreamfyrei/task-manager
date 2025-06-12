import { asyncHandler } from "../utils/async-handler.js";
import { ApiResponse } from "../utils/api-response.js";
import e from "express";

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, username } = req.body;

    registrationValidation
    
})

export { registerUser };