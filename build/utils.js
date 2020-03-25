"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = function (dateString) {
    var dateParts = dateString.split('/').map(function (value) {
        return parseInt(value);
    });
    var day = dateParts[0], month = dateParts[1], year = dateParts[2];
    return new Date(year, month - 1, day);
};
