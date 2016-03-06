'use strict';var _mocha = require('mocha');var _mocha2 = _interopRequireDefault(_mocha);var _assert = require('assert');var _assert2 = _interopRequireDefault(_assert);var _index = require('./index');var _index2 = _interopRequireDefault(_index);var _solution = require('./solution2');var _solution2 = _interopRequireDefault(_solution);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}




var readyData = [
// [第一个数, 第二个数, 答案]
[1, 1, 2], 
[1, 9999, 10000], 

[-1, -1, -2], 
[-1, -1119, -1120], 

[1, -1, 0], 
[2, -1, 1], 
[100, -11, 89], 
[100, -111, -11], 
[123, -321, -198], 
[123, -3211, -3088], 
[4444, -3211, 1233], 
[44444, -3211, 41233], 
[44444, -321111, -276667], 

[-1, 1, -0], 
[-2, 1, -1], 
[-100, 11, -89], 
[-100, 111, 11], 
[-123, 321, 198], 
[-123, 3211, 3088], 
[-4444, 3211, -1233], 
[-44444, 3211, -41233], 
[-44444, 321111, 276667]];


describe("BigInt 加法 常规方法", function () {
  readyData.forEach(function (d) {
    it(d[0] + ' + ' + d[1] + ' = ' + d[2], function () {
      _assert2.default.equal((0, _index2.default)('' + d[0], '' + d[1]), '' + d[2]);});});});




describe("BigInt 加法 Solution2", function () {
  readyData.forEach(function (d) {
    it(d[0] + ' + ' + d[1] + ' = ' + d[2], function () {
      _assert2.default.equal((0, _solution2.default)('' + d[0], '' + d[1]), '' + d[2]);});});});