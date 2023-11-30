const errorHandler = (statusCode, message) => {
    const error = new Error('Error: ' + statusCode);
    error.statusCode = statusCode;
    error.message = message;
    return error;
}
export default errorHandler;