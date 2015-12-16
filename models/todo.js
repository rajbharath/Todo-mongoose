var mongoose = require('mongoose');

var todoSchema = mongoose.Schema({ task: String, status: Boolean });

var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
