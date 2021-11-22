const factorial = (num) => {
    if (num == 0 || num == 1) return 1;
    return num * factorial(num - 1);
  };
  
  const myprime = (num) => {
    for (let i = 2; i < num / 2; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  };
  
  const printable = (num) => {
    for (let i = 1; i <= 10; i++) {
      console.log(`${num} * ${i} = ${num * i}`);
    }
  };
  
  module.exports = { factorial, myprime, printable };