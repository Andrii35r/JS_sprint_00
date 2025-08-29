let numberName = alert(1);

let bigIntName = alert(1234567890n);

let stringName = alert('Hello World!');

let booleanName = alert(true);

let nullName = alert(null);

let undefinedName = alert(undefined);


let objectName = {
    myName: "Andrii"
}
alert(objectName.myName);


let key = Symbol("key");
alert(key.toString());

Yourname()
function Yourname() {
    alert(Yourname)
}

// Оператор typeof возвращает строку, указывающую тип операнда.
let numberTypes =  alert(typeof 1);// Показывает "number"

let bigIntTypes =  alert(typeof 1234567890n);// Показывает "bigint"

let stringTypes =  alert(typeof 'Hello World!');// Показывает "string"

let booleanTypes =  alert(typeof true);// Показывает "boolean"

let nullTypes =  alert(typeof null);// Показывает "object"

let undefinedTypes =  alert(typeof undefined);// Показывает "undefined"


let objectTypes = {
    myTypes: "Andrii"
}
 alert(typeof objectTypes.myTypes);// Показывает "object"


let id = Symbol("key");
 alert(typeof id.toString());// Показывает "object"

YourTypes()
function YourTypes() {
     alert(typeof YourTypes)// Показывает "function"
}