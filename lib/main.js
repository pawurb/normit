/*jslint node: true */
"use strict";

exports.translate = function(options) {
  var translator = require('./translate');
  var translatedText = translator.run(options);
  if(options.speak) {
    options.text = translatedText;
    translator.run(options);
  }
};


