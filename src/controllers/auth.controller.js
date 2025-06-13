import { asyncHandler } from "../utils/async-handler.js";
import { ApiResponse } from "../utils/api-response.js";


const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, username } = req.body;

    
    
})

export { registerUser };