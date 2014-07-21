var chai = require('chai');
var nock = require('nock');
var fs = require('fs');
var sinon = require('sinon');
chai.use(require('sinon-chai'));
var expect = chai.expect;

describe('translator', function() {
  var tr = require("./../lib/translator");
  var options = {
    from: 'en',
    to: 'es',
    text: 'donkey',
    speak: false,
    synonyms: false
  };

  before(function(done) {
    var googleResponse = fs.readFileSync('./test/fixtures/rawTextResponse', 'utf8');
    nock('http://translate.google.com').post('/translate_a/t?client=t&sl=en&tl=es&hl=pl&sc=2&ie=UTF-8&oe=UTF-8&prev=enter&ssel=0&tsel=0&')
    .reply(200, googleResponse);
    sinon.spy(console, 'log');
    var callback = function() {
      done();
    };

    tr.run(options, callback);
  });

  it('works', function(){
    expect(console.log).to.have.been.calledWith('=> burro');
  });
});
