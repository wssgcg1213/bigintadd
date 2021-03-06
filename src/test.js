import mocha from 'mocha';
import assert from 'assert';
import add from './index';
import solution2 from './solution2';

const readyData = [
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
  [-44444, 321111, 276667]
];

describe("BigInt 加法 常规方法", function() {
  readyData.forEach(d => {
    it(`${d[0]} + ${d[1]} = ${d[2]}`, () => {
      assert.equal(add('' + d[0], '' + d[1]), '' + d[2]);
    });
  });
});

describe("BigInt 加法 Solution2", function() {
  readyData.forEach(d => {
    it(`${d[0]} + ${d[1]} = ${d[2]}`, () => {
      assert.equal(solution2('' + d[0], '' + d[1]), '' + d[2]);
    });
  });
});

