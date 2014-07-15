var expect = require("chai").expect;

describe('urlConstructor', function() {
  var constructor = require("./../lib/urlConstructor");

  describe('speak flag set to true', function() {
    var options = {
      from: 'en',
      to: 'es',
      speak: true,
      text: 'hey cowboy'
    };

    it('returns correct url', function(){
      var url = constructor.url(options);
      expect(url).to.eq('http://translate.google.com/translate_tts?tl=es&ie=UTF-8&oe=UTF-8');
    });
  });

  describe('speak flag set to false', function() {
    var options = {
      from: 'en',
      to: 'es',
      speak: false,
      text: 'hey cowboy'
    };

    it('returns correct url', function(){
      var url = constructor.url(options);
      expect(url).to.eq('http://translate.google.com/translate_a/t?client=t&sl=en&tl=es&hl=pl&sc=2&ie=UTF-8&oe=UTF-8&prev=enter&ssel=0&tsel=0&');
    });
  });
});
