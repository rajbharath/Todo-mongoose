var Hapi = require('hapi');
var db = require('./db/connector');
var Routes = require('./config/routes');

var server = new Hapi.Server();

server.connection({ port: process.env.PORT || 1111 });

server.route(Routes);

server.start(function() {
  console.log('server listening at port ' + server.info.uri);
});
