const tool = {
  /**
   * judgeNegative
   * 判断负数, 如果是返回true
   */
  judgeNegative (n) {
    n = (n + '').trim();
    return n[0] === '-';
  },

  /**
   * 做加法, 支持正数 + 正数, 负数 + 负数
   */
  add(int1, int2) {
    let flag = ''; // 符号位, 默认空

    // 有负数的时候符号就是负数
    if (tool.judgeNegative(int1)) {
      int1 = int1.slice(1);
      flag = '-';
    }
    if (tool.judgeNegative(int2)) {
      int2 = int2.slice(1);
      flag = '-';
    }

    let s = 0; //进位标志
    let rInt1 = int1.split('').reverse(),
          rInt2 = int2.split('').reverse();
    const len = rInt1.length > rInt2.length ? rInt1.length : rInt2.length;
    const result = [];
    let overflow;

    for ( let i = 0; i < len; i ++ ) {
      overflow = (parseInt(rInt1[i]) || 0) + (parseInt(rInt2[i]) || 0) + s;
      if (overflow >= 10) {
        s = 1;
        overflow -= 10;
      } else {
        s = 0;
      }
      result.push(overflow);
    }
    if (s === 1) {
      result.push(s);
    }
    return flag + result.reverse().join('');
  },

  symbolInt1: Symbol('int1'),
  symbolInt2: Symbol('int2'),
  /**
   * 一个正数, 一个负数, 需要做减法
   */
  minus (int1, int2) {
    let flag = ''; // 符号位, 默认空
    let absoulteBigger, negativeInt; // 哪一个绝对值更大, 哪一个为负
    let absInt1 = '' + int1, 
        absInt2 = '' + int2; // 绝对值
    // 去符号位
    if (tool.judgeNegative(int1)) {
      absInt1 = int1.slice(1);
      negativeInt = tool.symbolInt1;
    }
    if (tool.judgeNegative(int2)) {
      absInt2 = int2.slice(1);
      negativeInt = tool.symbolInt2;
    }

    if (absInt1 === absInt2) {
      return '0'; // 绝对值一样, 符号相反, 0
    } else if (absInt1.length > absInt2.length) {
      absoulteBigger = tool.symbolInt1;
    } else if (absInt2.length > absInt1.length) {
      absoulteBigger = tool.symbolInt2;
    } else { // 两个数一样长
      for (let i = 0; i < absInt1.length; i++) {
        if (parseInt(absInt1[i]) > parseInt(absInt2[i])) {
          absoulteBigger = tool.symbolInt1;
          break;
        } else if (parseInt(absInt1[i]) < parseInt(absInt2[i])) {
          absoulteBigger = tool.symbolInt2;
          break;
        }
      }
    }

    if (absoulteBigger === tool.symbolInt2) { // 目标: int1 > int2
      [absInt1, absInt2] = [absInt2, absInt1]; // 一句话交换
      if (negativeInt === tool.symbolInt2) {
        flag = '-';
      }
    } else if (negativeInt === tool.symbolInt1) {
      flag = '-';
    }

    let s = 0; // 退位标志
    let rInt1 = absInt1.split('').reverse(),
        rInt2 = absInt2.split('').reverse();
    const len = rInt1.length > rInt2.length ? rInt1.length : rInt2.length;
    let result = [];
    let overflow;

    for ( let i = 0; i < len; i ++ ) {
      overflow = (parseInt(rInt1[i]) || 0) - (parseInt(rInt2[i]) || 0) - s;
      if (overflow < 0) {
        s = 1;
        overflow += 10;
      } else {
        s = 0;
      }
      result.push(overflow);
    }

    return flag + result.reverse().join('').replace(/^(0*)/, '');
  }
}

/**
 * 大数相加, 支持正负
 * @param  {[type]} int1 [description]
 * @param  {[type]} int2 [description]
 * @return {[type]}      [description]
 */
function bigAdd (int1, int2) {
  return ((tool.judgeNegative(int1) + tool.judgeNegative(int2)) % 2) ? tool.minus(int1, int2) : tool.add(int1, int2);
}


export default bigAdd;