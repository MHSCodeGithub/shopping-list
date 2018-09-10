const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema
const TodoSchema = new Schema({
  item: String
});

// Create model
const Todo = mongoose.model('Todo',TodoSchema);

// Export to use in other files
module.exports = Todo;
