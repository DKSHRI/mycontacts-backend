const { constants } = require("./constants");

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode || constants.INTERNAL_SERVER_ERROR;
  res.status(statusCode);

  let title = "Error";

  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      title = "Validation Failed";
      stackTrace = err.stack;
      break;
    case constants.UNAUTHORIZED:
      title = "Unauthorized";
      stackTrace = err.stack;
      break;
    case constants.FORBIDDEN:
      title = "Forbidden";
      stackTrace = err.stack;
      break;
    case constants.NOT_FOUND:
      title = "Not Found";
      stackTrace = err.stack;
      break;
    case constants.METHOD_NOT_ALLOWED:
      title = "Method Not Allowed";
      stackTrace = err.stack;
      break;
    case constants.CONFLICT:
      title = "Conflict";
      stackTrace = err.stack;
      break;
    case constants.UNSUPPORTED_MEDIA:
      title = "Unsupported Media Type";
      stackTrace = err.stack;
      break;
    case constants.TOO_MANY_REQUESTS:
      title = "Too Many Requests";
      stackTrace = err.stack;
      break;
    case constants.NOT_IMPLEMENTED:
      title = "Not Implemented";
      stackTrace = err.stack;
      break;
    case constants.SERVICE_UNAVAILABLE:
      title = "Service Unavailable";
      stackTrace = err.stack;
      break;
    default:
      title = "Internal Server Error";
       stackTrace = err.stack;
      break;
  }

  res.json({
    title,
    message: err.message,
    stackTrace: err.stack,
  });
};

module.exports = errorHandler;