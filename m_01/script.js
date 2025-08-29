function isEmpty(obj) {
    for (let key in obj) {
      return false;
    }
    return true;
}
let number = {};
console.log( isEmpty(number));
number.first = 5;
console.log( isEmpty(number));
delete number.first;
console.log( isEmpty(number));
