module.exports = {
  dupa: function(){
    return 'dupa raz';
  },

  parser: function(input) {
    return {
      from: input._[0],
      to: input._[1],
      speak: input.t,
      synonyms: input.s,
      text: input._.slice(2).join(' ')
    }
  }
};