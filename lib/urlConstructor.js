/*jslint node: true */
"use strict";

require('sugar');
var HOST = "https://www.bing.com";

var transformCountryCode = function(code) {
  if(code === 'en') {
    return 'en-US';
  } else {
    return code + '-' + code.toUpperCase();
  }
};

exports.url = function(options) {
  if(options.speak) {
    return "{HOST}/translator/api/language/Speak?locale={country_code}&gender=male&media=audio/mp3&text={text}"
    .assign({
      to: options.to,
      text: encodeURI(options.translated_text),
      country_code: transformCountryCode(options.to),
      HOST: HOST
    });
  } else {
    return "{HOST}/translator/api/Translate/TranslateArray?from={from}&to={to}"
    .assign({
      from: options.from,
      to: options.to,
      HOST: HOST
    });
  }
};
