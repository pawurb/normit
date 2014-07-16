/*jslint node: true */
"use strict";

var fs = require('fs');

module.exports = {
  save: function(soundBinary) {
    var homePath = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE
    var soundPath = homePath + '/.normit';
    if(!fs.existsSync(soundPath)){
      fs.mkdirSync(soundPath);
    }
    fs.writeFileSync(soundPath+'/sound_response.mpeg', soundBinary, 'binary');
  },
  play: function() {

  }
}
