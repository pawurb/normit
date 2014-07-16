/*jslint node: true */
"use strict";

require('sugar');
var fs = require('fs');
var exec = require('child_process').exec;
var pkg = require('./../package.json');

var homePath = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE
var soundPath = homePath + '/.normit';

module.exports = {
  save: function(soundBinary) {
    if(!fs.existsSync(soundPath)){
      fs.mkdirSync(soundPath);
    }
    fs.writeFileSync(soundPath+'/sound_response.mpeg', soundBinary, 'binary');
  },
  play: function() {
    var checkPlayerCmd = 'which mpg123';
    var noPlayer = false;
    exec(checkPlayerCmd, function (error, stdout, stderr) {
      if(stdout.has('not found')) {
        console.log(pkg.noPlayerMsg);
      }
    });

    if(noPlayer) {
      return;
    }

    var playCmd = 'mpg123 -q {soundPath}/sound_response.mpeg'.assign({soundPath: soundPath})
    exec(playCmd, function (error, stdout, stderr) {

    });
  }
}
