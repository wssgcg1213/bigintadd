'use strict';exports.__esModule = true;var _from = require('babel-runtime/core-js/array/from');var _from2 = _interopRequireDefault(_from);exports.default = 











wrapper;function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /**
                                                                                                       * eg: 888 - 99 = 789
                                                                                                       *
                                                                                                       * 8 + -0  8
                                                                                                       * 8 + -9  -1
                                                                                                       * 8 + -9  -1
                                                                                                       * 
                                                                                                       * 8 -1 -1
                                                                                                       * 8 -2 9
                                                                                                       * 7 8 9
                                                                                                       * 
                                                                                                       */function wrapper(int1, int2) {var _negative = [isNegative(int1), isNegative(int2)];var absInts = [_negative[0] ? int1.slice(1) : int1, _negative[1] ? int2.slice(1) : int2]; // 1正1负且结果为负的case 需要特殊处理
  if (_negative[0] + _negative[1] == 1) {if (_negative[0] && compare(absInts[0], absInts[1]) === '1') {return '-' + bigAdd(absInts, [false, true]);} else if (_negative[1] && compare(absInts[1], absInts[0]) === '1') {return '-' + bigAdd(absInts, [true, false]);}} else if (_negative[0] + _negative[1] == 2) {// 负 + 负 的 case, 需要特殊处理
    return '-' + bigAdd(absInts, [false, false]);}


  return bigAdd(absInts, _negative);}


function bigAdd(absInts, _negative) {
  var maxLen = Math.max(absInts[0].length, absInts[1].length);
  var absInt1 = zeroPad(absInts[0], maxLen);
  var absInt2 = zeroPad(absInts[1], maxLen);
  var result = (0, _from2.default)({ length: maxLen }).map(function (ept, pos) {
    var prev = parseInt(absInt1[pos]) * (_negative[0] ? -1 : 1), 
    next = parseInt(absInt2[pos]) * (_negative[1] ? -1 : 1);
    return prev + next;});


  for (var i = result.length - 1; i > 0; i--) {
    if (result[i] < 0) {
      result[i - 1] -= 1;
      result[i] += 10;} else 
    if (result[i] >= 10) {
      result[i - 1] += 1;
      result[i] -= 10;}}



  return result.join('').replace(/^0*/, '') || '0';}
;

/**
 * 判断是负数
 */
function isNegative(n) {
  n = (n + '').trim();
  return n[0] === '-';}


/**
 * 返回以str为值, len位长度的字符串数字 前面填充0
 */
function zeroPad(str, len) {
  if (str.length === len) {
    return str;}

  var strLen = str.length;
  return (0, _from2.default)({ length: len }).map(function (d, pos) {return pos < len - strLen ? 0 : str[pos - len + strLen];}).join('');}


//比大小: 0一样, 1前面大, -1后面大
function compare(absInt1, absInt2) {
  if (absInt1 === absInt2) {
    return '0'; // 绝对值一样, 符号相反, 0
  } else if (absInt1.length > absInt2.length) {
      return '1';} else 
    if (absInt2.length > absInt1.length) {
      return '-1';} else 
    {// 两个数一样长
      for (var i = 0; i < absInt1.length; i++) {
        if (parseInt(absInt1[i]) > parseInt(absInt2[i])) {
          return '1';
          break;} else 
        if (parseInt(absInt1[i]) < parseInt(absInt2[i])) {
          return '-1';
          break;}}}}module.exports = exports['default'];