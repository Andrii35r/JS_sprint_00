const phoneNumber = document.querySelector('.phone');
const worldCount = document.querySelector('.count');
const worldReplace = document.querySelector('.replace');
const inputText = document.querySelector('.world');

const ansverOutput = document.querySelector('.output');
const textInput = document.querySelector('.text');

let currentActive = null;

let i = 0;
let j = 0;
let k = 0;

phoneNumber.addEventListener('click', () => {
    if (/^[0-9]{9}$/.test(inputText.value)) {
        const phoneMain = inputText.value;
        textInput.value = phoneMain
        const formattedPhone = [
            phoneMain.slice(0, 3),
            phoneMain.slice(3, 6),
            phoneMain.slice(6)
        ].join('-');
        ansverOutput.textContent = formattedPhone
        
        i++;
        phoneNumber.textContent = `To phone number [${i}]`;
    } 
    else {
        alert('Phone must has 9 number');
    }
});

worldCount.addEventListener('click', () => {
    let count = 0;
    if (inputText.value !== '' || textInput.value !== '') {
        const words = textInput.value.split(' ');
        words.forEach(word => {
            if (word === inputText.value) {
                count++;
            }
        });
        j++
        worldCount.textContent = `Word text [${j}]`;
        ansverOutput.textContent = `Word count ${count}`;
    }
});

worldReplace.addEventListener('click', () => {
    if (inputText.value !== '' || textInput.value !== '') {
        const words = textInput.value.split(' ');
        const replacedText = words.map(() => inputText.value).join(' ');
        k++;
        worldReplace.textContent = `World Replace [${k}]`;
        ansverOutput.textContent = replacedText;
    }
});