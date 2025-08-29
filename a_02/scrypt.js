// function generatePermutations(arr) {
//   if (arr.length <= 1) return [arr];
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
//     const permutations = generatePermutations(rest);
//     for (const perm of permutations) {
//       result.push([arr[i], ...perm]);
//     }
//   }
//   return result;
// }

// console.log(generatePermutations([1, 2, 3]));

// function fibonacci(n) {
//   if (n <= 100) return n;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

// console.log(fibonacci(10));


// function bubbleSort(arr) {
//   let n = arr.length;
//   for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   return arr;
// }

// const arr = [64, 34, 25, 12, 22, 11, 90];
// console.log(bubbleSort(arr));

// function quickSort(arr) {
//   if (arr.length <= 1) return arr;
//   const pivot = arr[0];
//   const left = [], right = [];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < pivot) left.push(arr[i]);
//     else right.push(arr[i]);
//   }
//   return [...quickSort(left), pivot, ...quickSort(right)];
// }

// console.log(quickSort([64, 34, 25, 12, 22, 11, 90]));

// function binarySearch(arr, target) {
//   let left = 0, right = arr.length - 1;
//   while (left <= right) {
//     const mid = Math.floor((left + right) / 2);
//     if (arr[mid] === target) return mid;
//     if (arr[mid] < target) left = mid + 1;
//     else right = mid - 1;
//   }
//   return -1;
// }

// const sortedArr = [11, 12, 22, 25, 34, 64, 90];
// console.log(binarySearch(sortedArr, 22));

// const students = [
//     {name: 'Oleg', surname: 'Sosiskin', grades: [2, 5, 4, 5, 6]},
//     {name: 'Katia', surname: 'Hellejeva', grades: [4, 5, 6, 5, 5]},
//     {name: 'Ivan', surname: 'Ivanow', grades: [2, 3, 1, 2, 5]},
//     {name: 'Maria', surname: 'Aleksandrowa', grades: [5, 5, 3, 5, 6]}
// ];

// const averages = [];

// function calculateAverage() {
//     for (let i = 0; i < students.length; i++) {
//         const student = students[i];
//         let sum = 0;
    
//         for (let j = 0; j < student.grades.length; j++) {
//             sum += student.grades[j];
//         }
    
//         const average = sum / student.grades.length;
//         averages.push(average);
//         console.log(average);
//     }
// }

// calculateAverage();

// function sortStudentsByAverage(arr) {
//    let n = arr.length;
//    for (let i = 0; i < n - 1; i++) {
//      for (let j = 0; j < n - 1 - i; j++) {
//        if (arr[j] < arr[j + 1]) {
//          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//        }
//      }
//    }
//    return arr;
// }

// console.log(sortStudentsByAverage(averages));


// function first() {
//   this.a = 5
//   console.log(this.a);
//   function secondFunction() {
//     console.log(this.a);
//     // Почему this.a равен 5
//   }
//   secondFunction()
// }
// first()

// 'use strict'; // Включает строгий режим

function strictFunc() {
  console.log(this); // undefined (вместо window)
}
strictFunc();

function changeArgs(a, b) {
  arguments[0] = 100;
  console.log(a);
}
changeArgs(1, 2);

function sum(a, a, c) { // Два параметра 'a' — плохо!
  return a + a + c;
}
console.log(sum(1, 2, 3)); // 7 (но логика сломана)

var y = 20;
delete y; // Бессмысленно, но не вызывает ошибки
console.log(y); // 20 (ничего не удалилось)

function createVar() {
  x = 10; // Опасно! Создаётся window.x (глобальная переменная)
}
createVar();
console.log(x); // 10 (утечка в глобал)

function showThis() {
  console.log(this); // window (в браузере)
}
showThis(); // this = window