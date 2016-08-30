/*jslint node: true */
"use strict";

module.exports = {
  text: function(rawText) {
    return JSON.parse(rawText).items[0].text;
  }
};
