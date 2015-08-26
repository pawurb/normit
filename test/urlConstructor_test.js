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
      expect(url).to.eq('https://translate.google.com/translate_tts?ie=UTF-8&tl=es&total=1&idx=0&textlen=5&tk=735012&client=t');
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
      expect(url).to.eq('https://translate.google.com/translate_a/single?client=t&sl=en&tl=es&hl=pl&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&dt=at&ie=UTF-8&oe=UTF-8&otf=2&srcrom=1&ssel=3&tsel=6&kc=2&tk=522578');
    });
  });
});
