const add = (num1, num2) => num1+num2;
const sub = (num1, num2) => num1-num2;
const mul = (num1, num2) => num1*num2;
const div = (num1, num2) => num1/num2;
const square = (num1, num2) => num1*num1;

const sum = (...args) => {
    let sum = 0;
    args.forEach((ele) => {
      sum += ele;
    });
    return sum;
  };

const max =(num1, num2, num3) => {
    return Math.max(num1, num2, num3);
};

const min =(num1, num2, num3) => {
    return Math.min(num1, num2, num3);
};

module.exports = {add, sub, mul ,div, square, sum, max, min};
