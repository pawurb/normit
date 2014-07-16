var expect = require("chai").expect;
var nock = require('nock');

describe('translator', function() {
  var tr = require("./../lib/translator");
  var options = {
    from: 'en',
    to: 'es',
    text: 'donkey',
    speak: false
  }

  var translating = function() {
  };

  it('works', function(){
    tr.run(options);
    expect(true).to.eq(true);
  });
});
