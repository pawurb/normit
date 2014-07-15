(function(){
  "use strict";
  var normit = require('./normit');
  console.log(normit.dupa());
  console.log(normit.dupa2());

  var argv = require('optimist').argv;

  console.log(argv);
  console.log(argv._);

  if (argv.t) {
    console.log('will speak');
  }

  if(argv.s) {
    console.log('will synanyms');
  }

}).call(this);
