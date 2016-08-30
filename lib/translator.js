/*jslint node: true */
"use strict";

var soundFetcher = require('./soundFetcher');
var textFetcher = require('./textFetcher');
var cookieFetcher = require('./cookieFetcher');
var urlConstructor = require('./urlConstructor');
var textHandler = require('./textResponseHandler');
var Q = require('q');
var messages = require('./messages.json');

exports.run = function(options) {
  var deferred = Q.defer();
  var nonSpeakOptions = Object.assign({}, options, { speak: false });
  var promisedCookies = cookieFetcher.fetch();
  var textUrl = urlConstructor.url(nonSpeakOptions);
  textFetcher.fetch(textUrl, options.text, promisedCookies).then(function(text) {
    var translated = textHandler.text(text);
    console.log('=> ' + translated);

    if(options.speak) {
      options.translated_text = translated;
      var soundUrl = urlConstructor.url(options);
      soundFetcher.fetch(soundUrl, promisedCookies).then(function(soundBinary) {
        var soundHandler = require('./soundResponseHandler');
        soundHandler.save(soundBinary);
        soundHandler.play();
        deferred.resolve();
      });
    } else {
      deferred.resolve();
    }
  }).catch(function() {
    console.log(messages.connectionErr);
    deferred.reject();
  });
  return deferred.promise;
};
