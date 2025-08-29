let number = 3;
let init = number;
let num;

const symbols = {
    add: (value) => init += value,
    sub: (value) => init -= value,
    mul: (value) => init *= value,
    div: (value) => init /= value
};

symbols.mul(num = 12);

symbols.add(num = 4);

symbols.div(num = 2);

symbols.sub(num = 2);

console.log(init);
