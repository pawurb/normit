/*jslint node: true */
"use strict";

require('sugar');

var synonymsAvailable = function(data) {
  return !data.has('true,false');
}

module.exports = {
  text: function(rawText) {
    return rawText.split("[[")[1].split("\"")[1];
  },
  synonyms: function(rawText) {
    var synonymsData = rawText.split("[[")[2].split("[")[1];
    //TODO remove
    var length = synonymsData.length;
    if(synonymsAvailable(synonymsData)){
      return synonymsData.slice(0, synonymsData.length-3).replace(/(,)/g, ", ").remove(/(")/g);
    } else {
      return  " ---";
    }
  }
};
