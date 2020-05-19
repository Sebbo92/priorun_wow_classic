"use strict";

exports.generateRandomId = function () {
    const minId = 1000;
    const maxId = 9999;
    return Math.floor(Math.random() * (maxId - minId + 1)) + minId;
}