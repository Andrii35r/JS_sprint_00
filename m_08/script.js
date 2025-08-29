function A() { }
function B() { }

let a = new A();
let b = new B();

alert( a == b );

let obj = {};

function A() { return obj; }
function B() { return obj; }

alert( new A() == new B() );