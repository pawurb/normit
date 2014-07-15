module.exports = {
  dupa: function(){
    return 'dupa raz';
  },

  parser: function(input) {
    if(input._[0].length !== 2 || input._[1].length !== 2) {
      throw { message: 'Wrong language codes'}
    }

    return {
      from: input._[0],
      to: input._[1],
      speak: input.t,
      synonyms: input.s,
      text: input._.slice(2).join(' ')
    };
  }
};