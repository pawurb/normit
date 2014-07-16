/*jslint node: true */
"use strict";

var Q = require('q');
var postPromise = Q.denodeify(require('request').post);

exports.fetch = function(url, text) {
  return postPromise(url, {form:{text: text}});
};
