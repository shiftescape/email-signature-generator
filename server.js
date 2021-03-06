(function() {

  'use strict';

  const PORT = 3000;

  var path = require('path');
  var express = require('express');
  var app = express();

  app.use(express.static(path.join(__dirname, 'app')));
	app.set('view engine', 'html');

  app.use('/app',  express.static(__dirname + '/app'));
  app.use('/bower_components',  express.static(__dirname + '/bower_components'));

  app.get("*", function(req, res) {
    res.sendFile('/app/index.html');
  });

  app.listen(process.env.PORT || PORT, function() {
    console.log(`** Server connected. Listening to port ${PORT} **`);
  });

}).call(this);
