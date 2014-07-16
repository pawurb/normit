/*jslint node: true */
"use strict";

//TODO use sugar js assign
exports.url = function(options) {
  var url;
  if(options.speak) {
    url = 'http://translate.google.com/translate_tts?tl=' + options.to + '&ie=UTF-8&oe=UTF-8';
  } else {
    url = 'http://translate.google.com/translate_a/t?client=t&sl=' + options.from + '&tl=' + options.to + '&hl=pl&sc=2&ie=UTF-8&oe=UTF-8&prev=enter&ssel=0&tsel=0&';
  }

  return url;
};
