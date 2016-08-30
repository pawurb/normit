/*jslint node: true */
"use strict";

var Q = require('q');
var request = require('request');
var getPromise = Q.denodeify(request.get);
var jar = request.jar();
const HOST = 'https://www.bing.com/translator';
const DUMMY_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36';

exports.fetch = function() {
  var deferred = Q.defer();
  getPromise({
    jar: jar,
    url: HOST,
    headers: {
      'User-Agent' : DUMMY_AGENT
    }
  }).then(function(res) {
    if(res[0].statusCode == 200) {
      var shyCookie = res[0].headers['set-cookie'][0].split(' ')[0];
      var cookies = jar.getCookieString(HOST) + ('; ' + shyCookie);
      deferred.resolve(cookies);
    } else {
      deferred.reject(res[0]);
    }
  }).catch(deferred.reject);

  return deferred.promise;
};
