var expect = require("chai").expect;
var fs = require('fs');

describe('textResponseHandler', function() {
  var handler = require("./../lib/textResponseHandler");
  var rawResponse = fs.readFileSync('./test/fixtures/rawTextResponse', 'utf8');

  it('extracts translated word', function(){
    expect(handler.text(rawResponse)).to.eq('Ass');
  });
});
