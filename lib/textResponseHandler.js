/*jslint node: true */
"use strict";

require('sugar');

var synonymsAvailable = function(data) {
  if(!data) {
    return false;
  }
  return !data.has('true,false');
};

module.exports = {
  text: function(rawText) {
    return rawText.split("[[")[1].split("\"")[1];
  },
  synonyms: function(rawText) {
    var synonymsData = rawText.split("[[")[2].split("[")[1];
    if(synonymsAvailable(synonymsData)){
      return synonymsData.slice(0, synonymsData.length-3).replace(/(,)/g, ", ").remove(/(")/g);
    } else {
      return  " ---";
    }
  }
};
