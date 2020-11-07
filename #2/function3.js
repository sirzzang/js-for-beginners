const calculator = {
    plus: function(a, b) {
        return a+b;
    },
    minus: function(a, b) {
        return a-b;
    },
    multiply: function(a, b) {
        return a*b;
    },
    divide: function(a, b) {
        return a/b;
    },
    power: function(a, b) {
        return a**b;
    }
}

const plus = calculator.plus(5, 5);
const result = [calculator.plus(5, 5), calculator.minus(5, 5), calculator.multiply(5, 5), calculator.divide(5, 5), calculator.power(5, 5)];

console.log(plus);
console.log(calculator);
console.log(result);