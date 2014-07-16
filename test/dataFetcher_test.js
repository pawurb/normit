var expect = require("chai").expect;
var nock = require('nock');

describe('dataFetcher', function() {
  var fetcher = require("./../lib/dataFetcher");
  before(function() {
    nock('http://target-url.com').post('/data')
    .reply(200, 'correct data');
  });

  it('fetches the correct data', function(){
    fetcher.fetch('http://target-url.com/data', 'text', 'utf8').then(function(err, res, body) {
        expect(body).to.eq('correct data');
      }
    );
  });
});
