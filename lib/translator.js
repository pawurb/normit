/*jslint node: true */
"use strict";

var fetcher = require('./dataFetcher');
var urlConstructor = require('./urlConstructor');
var textHandler = require('./textResponseHandler');

exports.run = function(options) {
  var nonSpeakOptions = Object.merge(Object.clone(options), {speak:false});
  var url = urlConstructor.url(nonSpeakOptions);
  fetcher.fetch(url, options.text).then(function(res) {
    var text = res[0].body;
    var translated = textHandler.text(text);
    console.log('=> ' + translated);
    if(options.synonyms) {
      console.log('=> Synonyms: ' + textHandler.synonyms(text));
    }

    if(options.speak) {
      url = urlConstructor.url(options);
      fetcher.fetch(url, translated).then(function(res) {
        console.log('i will say'+ translated);
        var binary = res[0].body;
        console.log(binary);
        var writer = require('q').denodeify(require('fs').writeFile)
        writer('message8.mpeg', binary, 'binary').then(function(data) {
          console.log('write');
          console.log(data);
        }).fail(function(err) {
          console.log('err');
          console.log(err);
        });
      });
    }
  });
};
