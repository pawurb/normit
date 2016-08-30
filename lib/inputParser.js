/*jslint node: true */
"use strict";

exports.parse = function(input) {
  var correctSizes = [2,7];
  if(correctSizes.indexOf(input._[0].length) == -1 || correctSizes.indexOf(input._[1].length) == -1) {
    throw { message: 'wrong_lang_code' };
  }

  return {
    from: input._[0],
    to: input._[1],
    speak: !!input.t,
    text: input._.slice(2).join(' ')
  };
};
