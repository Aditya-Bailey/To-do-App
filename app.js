var express = require('express');


var todoController = require('./controllers/todoController');


var app = express();

//set up template engine
app.set('view engine', 'ejs');

//static file
app.use('/assets', express.static('/assets'));

//fire cntrollers
todoController(app);

app.listen(3000);
console.log('listening');