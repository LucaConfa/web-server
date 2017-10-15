let express = require('express');
const PORT = 3000;
var app = express();

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

//add middleware to app level
//app.use(middleware.requireAuthentication);
app.use(middleware.logger);

// add middleware to route level
app.get('/about',middleware.requireAuthentication, ((req, res) => {
  res.send('About Us');
}));

app.use(express.static(__dirname+ '/public'));

app.listen(PORT, ()=>{
  console.log(`Express Server started on port ${PORT}`);
});