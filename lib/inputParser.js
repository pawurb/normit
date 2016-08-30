/*jslint node: true */
"use strict";

require('sugar');

exports.parse = function(input) {
  var correctSizes = [2,7];
  if(correctSizes.none(input._[0].length) || correctSizes.none(input._[1].length)) {
    throw { message: 'wrong_lang_code' };
  }

  return {
    from: input._[0],
    to: input._[1],
    speak: !!input.t,
    text: input._.slice(2).join(' ') //TODO use sugar
  };
};
