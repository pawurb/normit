/*jslint node: true */
"use strict";

var request = require('request');

//TODO use q
exports.fetch = function(url, text, callback) {
  request.post(url, {form:{text: text}}, callback);
};
