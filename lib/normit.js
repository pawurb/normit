module.exports = {
  dupa: function(){
    return 'dupa raz';
  },

  parser: function(input) {
    return {
      src: input._[0],
      target: input._[1],
      text: input._.slice(2).join(' ')
    }
  }
};