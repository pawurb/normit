/*jslint node: true */
"use strict";

var Q = require('q');
var getPromise = Q.denodeify(require('request').get);
var messages = require('./messages.json');

exports.fetch = function(url, promisedCookies) {
  var deferred = Q.defer();

  promisedCookies.then(function(cookies) {
    return getPromise({
      headers: {
        'Cookie': cookies
      },
      jar: true,
      url: url,
      encoding: 'binary'
    });
  }).then(function(res) {
    if(res[0].statusCode == 200) {
      deferred.resolve(res[0].body);
    } else if(res[0].statusCode == 400) {
      console.log(messages.cannotSpeak);
    } else {
      deferred.reject(res[0]);
    }
  }).catch(deferred.reject);

  return deferred.promise;
};
