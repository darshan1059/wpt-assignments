const calc={
    add: (num1,num2) => {
        return num1+num2;
    },

    sub: (num1,num2) => {
        return num1- num2;
    },

    mul: (num1,num2) => {
        return num1*num2;
    },

    div: (num1,num2) => {
        return num1/num2;
    },

    squ: (num1) => {
        return num1*num1;
    },

    sum: (num1,num2,num3) => {
        return num1+num2+num3;
    },

    min: (num1,num2,num3) => {
        return Math.min(num1,num2,num3);
    },

    max: (num1,num2,num3) => {
        return Math.max(num1,num2,num3);
    }
}

const num1 = 10;
const num2 = 20;
const num3 = 30;

console.log(`Addition of ${num1} and ${num2} is: ${calc.add(num1,num2)}`);
console.log(`Substraction of ${num1} and ${num2} is: ${calc.sub(num1,num2)}`);
console.log(`Multiplication of ${num1} and ${num2} is: ${calc.mul(num1,num2)}`);
console.log(`Square of ${num1} is: ${calc.squ(num1)}`);
console.log(`Sum of ${num1}, ${num2} and ${num3}  is: ${calc.sum(num1,num2,num3)}`);
console.log(`Minimun of ${num1}, ${num2} and ${num3}  is: ${calc.min(num1,num2,num3)}`);
console.log(`Maximum of ${num1}, ${num2} and ${num3}  is: ${calc.max(num1,num2,num3)}`);