var expect = require("chai").expect;

describe('urlConstructor', function() {
  var constructor = require("./../lib/urlConstructor");

  describe('speak flag set to true', function() {
    var options = {
      from: 'en',
      to: 'es',
      speak: true,
      text: 'hey cowboy',
      translated_text: 'Hey vaquero'
    };

    it('returns correct url', function(){
      var url = constructor.url(options);
      expect(url).to.eq('https://www.bing.com/translator/api/language/Speak?locale=es-ES&gender=male&media=audio/mp3&text=Hey%20vaquero');
    });
  });

  describe('speak flag set to false', function() {
    var options = {
      from: 'en',
      to: 'es',
      speak: false,
      text: 'hey cowboy',
      translated_text: 'Hey vaquero'
    };

    it('returns correct url', function(){
      var url = constructor.url(options);
      expect(url).to.eq('https://www.bing.com/translator/api/Translate/TranslateArray?from=en&to=es');
    });
  });
});
