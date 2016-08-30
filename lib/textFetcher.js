/*jslint node: true */
"use strict";

var Q = require('q');
var postPromise = Q.denodeify(require('request').post);

var getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var textPayload = function(text) {
  var id = getRandomInt(20168810, 29163211);
  return JSON.stringify([{ id: id, text: text }]);
};

exports.fetch = function(url, text, promisedCookies) {
  var deferred = Q.defer();

  promisedCookies.then(function(cookies) {
    return postPromise({
      headers: {
        'Cookie': cookies,
        'Content-Type': 'application/json'
      },
      jar: true,
      url: url,
      encoding: 'utf8',
      body: textPayload(text)
    });
  }).then(function(res) {
    if(res[0].statusCode == 200) {
      deferred.resolve(res[0].body);
    } else {
      deferred.reject(res[0]);
    }
  }).catch(deferred.reject);

  return deferred.promise;
};
