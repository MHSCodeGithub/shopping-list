var express = require('express');
var todoController = require('./controllers/todoController');
var app = express();

// EJS for view engine
app.set('view engine','ejs');

// Serve static files
app.use(express.static('./public'));

// fire controllers
todoController(app);

// Listen on port 3000
app.listen(3000);
console.log('TODO App listening on port 3000');
