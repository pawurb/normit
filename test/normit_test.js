var expect = require("chai").expect;

describe('user input parser', function() {
  var parser = require("./../lib/normit").parser;

  describe('user provides correct options', function() {
    it('returns the object containing translation data', function(){
      var userOptions = {
        _: ['en', 'es', 'cowboy']
      }

      expect(parser(userOptions)).to.eq(userOptions._);
    });
  });

  describe('user provides incorrect options', function() {
    it('returns raises error', function(){
        // expect(parser()).to.eq('dupa dwa');
    });
  });
});
