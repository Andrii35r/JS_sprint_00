import { LinkedList } from './scrypt.js';

const list = new LinkedList;
list.add('a')
list.add('a')
list.add('b')
list.add('c')
list.remove()
console.log(list);
console.log(list.contains('d'));
console.log(list.contains('a'));
console.log(list.contains('c'));
console.log(list.contains('r'));
console.log(list.count());
list.log()
console.log(list);
list.clear();
console.log(list);

