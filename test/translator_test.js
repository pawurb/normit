var chai = require('chai');
var nock = require('nock');
var fs = require('fs');
var sinon = require('sinon');
chai.use(require('sinon-chai'));
var expect = chai.expect;
const HOST = 'https://www.bing.com';

describe('translator', function() {
  var tr = require("./../lib/translator");
  var options = {
    from: 'en',
    to: 'es',
    text: 'donkey',
    speak: true
  };

  before(function() {
    nock(HOST).get('/translator')
    .reply(200, '',
      {
       'set-cookie': 'dummy_cookie'
      }
    );

    var translatedResponse = fs.readFileSync('./test/fixtures/rawTextResponse', 'utf8');
    nock(HOST).post('/translator/api/Translate/TranslateArray?from=en&to=es')
    .reply(200, translatedResponse);

    nock(HOST).post('/translator/api/language/Speak?locale=es-ES&gender=female&media=audio/mp3&text=burro')
    .reply(200, '');

    sinon.spy(console, 'log');
  });

  it('works', function(){
    tr.run(options).then(function() {
      expect(console.log).to.have.been.calledWith('=> burro');
    });
  });
});
