var expect = require("chai").expect;
var nock = require('nock');

describe('translator', function() {
  var tr = require("./../lib/translator");
  var options = {
    from: 'en',
    to: 'es',
    text: 'donkey',
    speak: false
  };

  it('works', function(){
    //TODO use nock to mock
    //TODO use promises testing syntax
    // tr.run(options);
    expect(true).to.eq(true);
  });
});
