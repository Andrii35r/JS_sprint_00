const user = {
    name: 'Steve',
    surname: 'Rogers',
    age: "101",
    city: 'New York'
};

const copy = JSON.parse(JSON.stringify(user));

user.name = 'John';
console.log(user.name);
console.log(copy.name);

copy.age = '56';
console.log(user.age);
console.log(copy.age);

user.city = 'Vashington';

console.log(user.city);
console.log(copy.city);