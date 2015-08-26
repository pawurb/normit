/*jslint node: true */
"use strict";

require('sugar');

var HOST = 'https://translate.google.com';

exports.url = function(options) {
  var url;
  if(options.speak) {
    url = '{HOST}/translate_tts?ie=UTF-8&tl={to}&total=1&idx=0&textlen=5&tk=735012&client=t'
    .assign({ to: options.to, HOST: HOST });
  } else {
    url = '{HOST}/translate_a/single?client=t&sl={from}&tl={to}&hl=pl&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&dt=at&ie=UTF-8&oe=UTF-8&otf=2&srcrom=1&ssel=3&tsel=6&kc=2&tk=522578'
    .assign({ from: options.from, to: options.to, HOST: HOST });
  }

  return url;
};
