/*jslint node: true */
"use strict";

var Q = require('q');
var request = require('request');
var getPromise = Q.denodeify(request.get);
var jar = request.jar();
var B = require('baconjs');
const HOST = 'https://www.bing.com/translator';
const DUMMY_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36';

exports.fetch = function() {
  var cookie_stream = B.fromPromise(getPromise({
    jar: jar,
    url: HOST,
    headers: {
      'User-Agent' : DUMMY_AGENT
    }
  })).map(function(res) {
    if(res[0].statusCode == 200) {
      var shyCookie = res[0].headers['set-cookie'][0].split(' ')[0];
      var cookies = jar.getCookieString(HOST) + ('; ' + shyCookie);
      return cookies;
    } else {
      return null;
    }
  });

  var deferred = Q.defer();

  cookie_stream.onValue(function(data) {
    if(data) {
      deferred.resolve(data);
    } else {
      deferred.reject();
    }
  })

  cookie_stream.onError(function(err) {
    deferred.reject(err);
  });

  return deferred.promise;
};
