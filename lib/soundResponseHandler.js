/*jslint node: true */
"use strict";

var fs = require('fs');
var os = require('os');
var exec = require('child_process').exec;
var pkg = require('./../package.json');
var messages = require('./messages.json');

var homePath = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
var soundPath = homePath + '/.normit';

module.exports = {
  save: function(soundBinary) {
    if(!fs.existsSync(soundPath)){
      fs.mkdirSync(soundPath);
    }
    fs.writeFileSync(soundPath+'/sound_response.mp3', soundBinary, 'binary');
  },
  play: function() {
    var noPlayer = false;
    var osp = os.platform();
    var osIndex = null;
    if (osp.slice(0,3) == "win") {
      osIndex = 0;   // some version of windows
    } else if (osp === "darwin")
      osIndex = 1;   // some version of Mac
    else {
      osIndex = 2;   // some version of linux
    }

    exec((osIndex ? "which" : "where") + " mpg123", function (error, stdout, stderr) {
      if(stdout.indexOf('mpg123') == -1) {
        console.log(messages[["noPlayerWin", "noPlayerMac", "noPlayerOther"][osIndex]]);
        return;
      }
      var playCmd = `mpg123 -q ${soundPath}/sound_response.mp3`;
      exec(playCmd);
    });
  }
};
