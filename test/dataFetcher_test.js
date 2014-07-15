var expect = require("chai").expect;
var nock = require('nock');

describe('dataFetcher', function() {
  var fetcher = require("./../lib/dataFetcher");
  var response;
  before(function() {
    nock('http://target-url.com').post('/data')
    .reply(200, 'correct data');
    var callback = function(err, res, body) {
      response = body;
    };

    fetcher.fetch('http://target-url.com/data', 'text', callback);
  });

  it('fetches the correct data', function(){
    expect(response).to.eq('correct data');
  });
});
