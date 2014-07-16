/*jslint node: true */
"use strict";

require('sugar');

exports.url = function(options) {
  var url;
  if(options.speak) {
    url = 'http://translate.google.com/translate_tts?tl={to}&ie=UTF-8&oe=UTF-8'
    .assign({to: options.to});
  } else {
    url = 'http://translate.google.com/translate_a/t?client=t&sl={from}&tl={to}&hl=pl&sc=2&ie=UTF-8&oe=UTF-8&prev=enter&ssel=0&tsel=0&'
    .assign({ from: options.from, to: options.to });
  }

  return url;
};
