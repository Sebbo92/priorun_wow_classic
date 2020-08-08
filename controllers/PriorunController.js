"use strict";

module.exports = {
    generateRandomId
  }


function generateRandomId() {
    const minId = 1000;
    const maxId = 9999;
    
    return Math.floor(Math.random() * (maxId - minId + 1)) + minId;
}