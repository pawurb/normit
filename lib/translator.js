/*jslint node: true */
"use strict";

var fetcher = require('./dataFetcher');
var urlConstructor = require('./urlConstructor');

exports.run = function(options) {
  var url = urlConstructor.url(options);
  fetcher.fetch(url, options.text).then(function(res) {
    console.log(res[0].body);
  });
};
