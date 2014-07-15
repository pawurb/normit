"use strict";

var sugar = require('sugar');

exports.parse = function(input) {
  var correctSizes = [2,4];
  if(correctSizes.none(input._[0].length) || correctSizes.none(input._[1].length)) {
    throw { message: 'Wrong language codes'}
  }

  return {
    from: input._[0],
    to: input._[1],
    speak: !!input.t,
    synonyms: !!input.s,
    text: input._.slice(2).join(' ')
  };
}
