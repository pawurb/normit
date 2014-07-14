var expect = require("chai").expect;

describe('user input parser', function() {
  var parser = require("./../lib/normit").parser;

  describe('user provides correct options', function() {
    it('returns the object containing translation data', function(){
      var userOpts = {
        _: ['en', 'es', 'cowboy']
      };

      var parsedOpts = parser(userOpts);
      expect(parsedOpts.src).to.eq('en');
      expect(parsedOpts.target).to.eq('es');
      expect(parsedOpts.text).to.eq('cowboy');
    });
  });

  describe('user provides incorrect options', function() {
    it('returns raises error', function(){
        // expect(parser()).to.eq('dupa dwa');
    });
  });
});
