var expect = require("chai").expect;
var nock = require('nock');
var fs = require('fs');

describe('textResponseHandler', function() {
  var handler = require("./../lib/textResponseHandler");
  var rawResponse = fs.readFileSync('./test/fixtures/rawTextResponse', 'utf8');

  it('extracts translated word', function(){
    expect(handler.text(rawResponse)).to.eq('burro');
  });

  it('extracts the list of synonyms', function(){
    var synonyms = "burro, asno, borrico, pollino, estúpido";
    expect(handler.synonyms(rawResponse)).to.eq(synonyms);
  });
});
