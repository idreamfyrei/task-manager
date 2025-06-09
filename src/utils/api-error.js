class ApiError extends Error {
  constructor(statusCode, message, errors = [], stack = "") {
    super(message);
    this.status = statusCode;
    this.message = message;
    this.success = false;
    this.errors = errors;
    
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
