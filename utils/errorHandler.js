const BusinessError = require('./BusinessError');

function errorHandler(err, req, res, next) {

  console.log(err.message);
  console.log(err.stack);

  // This is kind of expected error
  // Can optionally monitor to improve UX
  if(err instanceof BusinessError) {
    res.status(200).json({
      error: {
        errorCode: err.errorCode,
        message: err.message,
      }
    });
    return;
  }

  // This is unexpected error
  // Alert dev or whatever
  res.status(500).json({
    error: {
      message: 'Something went wrong',
    }
  });
  return;
}

module.exports = errorHandler;
