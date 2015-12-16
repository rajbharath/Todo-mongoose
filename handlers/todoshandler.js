var Todo = require('../models/todo');

var TodosHandler = {};

TodosHandler.findAll = function(request, reply) {
  return reply(Todo.find());
};

TodosHandler.get = function(request, reply) {
  Todo.findById(request.params.id, function(err, todo) {
    if(err) {
      reply('Error in get');
    } else {
      reply(todo);
    }
  });
};

TodosHandler.create = function(request, reply) {
  var todo = new Todo(request.payload);
  todo.save(request.payload, function(err, todo) {
    if(err) {
      return reply('Error in create');
    } else {
      return reply(todo);
    }
  });
};

TodosHandler.update = function(request, reply) {
  Todo.findByIdAndUpdate(request.params.id, { $set: request.payload }, { new: true }, function(err, todo) {
    if (err) {
      return reply('Error in update');
    } else {
      return reply(todo);
    }
  });
};

TodosHandler.delete = function(request, reply) {
  Todo.findByIdAndRemove(request.params.id, { }, function(err, todo) {
    if (err) {
      return reply('Error in delete');
    } else {
      return reply(todo);
    }
  });
};

module.exports = TodosHandler;
