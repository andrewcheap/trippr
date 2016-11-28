(function () {
  'use strict';
  var express = require('express');
  var app = express();

  require('./config/config_app')(app);
  require('./config/config_routes')(app);

  var port = 3000;
  // START THE SERVER
  console.log('STARTING THE SABRE SERVER');
  console.log('-------------------------');
  app.listen(port);
  console.log('Started the server');
  process.on('uncaughtException', function (error) {
      console.log(error.stack);
      console.log(error);
  });

  // shoutout to the user                     
  console.log('Magic happens on port ' + port);

})();