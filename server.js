let express = require('express');
const PORT = 3000;
var app = express();

var middleware = require('./middleware.js'); 


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