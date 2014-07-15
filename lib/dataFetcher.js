/*jslint node: true */
"use strict";

var Q = require('q')
var postPromise = Q.denodeify(require('request').post);

//TODO use q
exports.fetch = function(url, text) {
  return postPromise(url, {form:{text: text}});
};
