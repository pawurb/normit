/*jslint node: true */
"use strict";

var fetcher = require('./dataFetcher');
var urlConstructor = require('./urlConstructor');
var textHandler = require('./textResponseHandler');

//TODO should return a promise
exports.run = function(options, callback) {
  var nonSpeakOptions = Object.merge(Object.clone(options), {speak:false});
  var url = urlConstructor.url(nonSpeakOptions);
  fetcher.fetch(url, options.text, 'utf8').then(function(res) {
    var text = res[0].body;
    var translated = textHandler.text(text);
    console.log('=> ' + translated);
    if(options.synonyms) {
      console.log('=> Synonyms: ' + textHandler.synonyms(text));
    }

    if(options.speak) {
      url = urlConstructor.url(options);
      fetcher.fetch(url, translated, 'binary').then(function(res) {
        var soundBinary = res[0].body;
        var soundHandler = require('./soundResponseHandler');
        soundHandler.save(soundBinary);
        soundHandler.play();
      });
    }
    callback();
  });
};
