/*jslint node: true */
"use strict";

const HOST = "https://www.bing.com";

var transformCountryCode = function(code) {
  if(code === 'en') {
    return 'en-US';
  } else {
    return code + '-' + code.toUpperCase();
  }
};

exports.url = function(options) {
  if(options.speak) {
    let country_code = transformCountryCode(options.to);
    let text = encodeURI(options.translated_text);

    return `${HOST}/translator/api/language/Speak?locale=${country_code}&gender=male&media=audio/mp3&text=${text}`;
  } else {
    return `${HOST}/translator/api/Translate/TranslateArray?from=${options.from}&to=${options.to}`;
  }
};
