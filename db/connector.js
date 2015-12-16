var mongoose = require('mongoose');

var db_uri = process.env.MONGOLAB_URI || 'mongodb://localhost/test'
mongoose.connect(db_uri);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));

db.on('open', function(callback) {

});

db.on('close', function(callback) {
  console.log('db closed');
});

module.exports = db;
