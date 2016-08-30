/*jslint node: true */
"use strict";

var Q = require('q');
var getPromise = Q.denodeify(require('request').get);

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
    } else {
      deferred.reject(res[0]);
    }
  }).catch(deferred.reject);

  return deferred.promise;
};
