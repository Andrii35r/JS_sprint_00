setTimeout(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
        .finally(console.log('End'));
}, 1000)


// setTimeout(() => {
//     fetch(`https://jsonplaceholder.typicode.com/todos/6`)
//         .then(res => res.json())
//         .then(data => console.log(data))
//         .catch(error => console.error(error));
// }, 1050)


setTimeout(() => {
    fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    body: JSON.stringify({
        title: "carefuly using metod fetch",
        completed: true,
        userId: 1
    }),
    headers: { 'Content-Type': 'application/json' }
})
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));


}, 1100)

setTimeout(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: "carefuly using metod PUT",
        completed: false,
        userId: 7
    })
})
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

}, 1150)

setTimeout(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1', {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    },
})
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

}, 1200)


    


// axios.get("https://jsonplaceholder.typicode.com/todos/1")
//   .then(response => console.log(response.data));

// axios.post("https://jsonplaceholder.typicode.com/todos", {
//     body: JSON.stringify({
//         title: "carefuly using metod fetch",
//         completed: true,
//         userId: 1
//     }),
//     headers: { 'Content-Type': 'application/json' }
// })

//   .then(response => console.log(response.data));

// axios.put("https://jsonplaceholder.typicode.com/todos/1", {
//     body: JSON.stringify({
//         title: "carefuly using metod put",
//         completed: false,
//         userId: 1
//     }),
//     headers: { 'Content-Type': 'application/json' }
// })
//   .then(response => console.log(response.data));

//   axios.delete("https://jsonplaceholder.typicode.com/todos/1")
//   .then(response => console.log(response.data));

// async function makeBreakfast() {

//   const eggs = await fryEggs();
//   console.log(eggs);

//   const coffee = await makeCoffee();
//   console.log(coffee);
  

//   const toast = await makeToast();
//   console.log(toast);
  
//   return "Завтрак готов!";
// }


// function makeCoffee() {
//   return new Promise(resolve => {
//     setTimeout(() => resolve("Кофе готов"), 1000);
//   });
// }

// function fryEggs() {
//   return new Promise(resolve => {
//     setTimeout(() => resolve("Яичница готова"), 1500);
//   });
// }

// function makeToast() {
//   return new Promise(resolve => {
//     setTimeout(() => resolve("Тосты готовы"), 800);
//   });
// }

// makeBreakfast().then(result => console.log(result));

// async function getCoffee() {
//   console.log("Начинаю готовить кофе...");
  

//   await new Promise(resolve => setTimeout(resolve, 2000));
  
//   console.log("Кофе готов!");
// }

// getCoffee();