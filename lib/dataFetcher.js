/*jslint node: true */
"use strict";

var Q = require('q');
var getPromise = Q.denodeify(require('request').get);

exports.fetch = function(url, text, encoding) {
  var targetUrl = url + '&q={text}'.assign({ text: encodeURIComponent(text) })
  return getPromise({ url: targetUrl, encoding: encoding });
};
