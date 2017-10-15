
var middleware = {
  requireAuthentication: (req, res, next) => {
    console.log('Privte Route hit');
    next();
  },
  logger: (req, res, next) => {
    let today = new Date();
    console.log(`Request: ${req.method} ${req.originalUrl} ${today.toString()}`);
    next();
  }
};

module.exports = middleware;