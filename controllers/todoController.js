var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const Todo = require('../models/todo');
mongoose.Promise = global.Promise;

// MLAB Database
mongoose.connect("mongodb://user:pass@ds113586.mlab.com:13586/todos", {
  useMongoClient: true
});

// Connect to the Database
mongoose.connection.once('open',function() {
  console.log("Mongodb Connection made");
}).on('error', function() {
  console.log('Connection error',error);
});

var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app) {

  // READ
  app.get('/todo', function(req, res) {
    Todo.find({}, function(err, data) {
      if (err) throw err;
      // Render 'todo' view, send all todo items from DB as data to the page
      res.render('todo', {todos: data});
    });

  });

  // CREATE
  app.post('/todo', urlencodedParser, function(req, res) {
    var item = Todo(req.body).save(function(err) {
      if(err) {
        console.log(err);
      } else {
        console.log('Item saved to DB');
      }
    });
  });

  // DELETE
  app.delete('/todo/:item', function(req, res) {
    Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err,data) {
      if (err) throw err;
      res.json(data);
    })
  });

};
