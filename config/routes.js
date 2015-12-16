var TodosHandler = require('../handlers/todoshandler');

var Routes = [
  {
    path: '/todos',
    method: 'GET',
    handler: TodosHandler.findAll
  },
  {
    path: '/todos',
    method: 'POST',
    handler: TodosHandler.create
  },
  {
    path: '/todos/{id}',
    method: 'PUT',
    handler: TodosHandler.update
  }
];

module.exports = Routes;
