/*jslint node: true */
"use strict";

var fetcher = require('./dataFetcher');
var urlConstructor = require('./urlConstructor');
var textHandler = require('./textResponseHandler');

exports.run = function(options) {
  var url = urlConstructor.url(options);
  fetcher.fetch(url, options.text).then(function(res) {
    var text = res[0].body;
    console.log('=> ' + textHandler.word(text));
    if(options.synonyms) {
      console.log('=> Synonyms: ' + textHandler.synonyms(text));
    }
  });
};
