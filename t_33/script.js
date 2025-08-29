const addText = document.querySelector('.add');
const clearText = document.querySelector('.clear');
const inputText = document.querySelector('.text-input');
const outputText = document.querySelector('.output');

addText.addEventListener('click', () => {
    const inputValue = inputText.value.trim();
    if (!inputValue) return;
    
    const timestamp = new Date().toLocaleString();
    const entry = `${timestamp}: ${inputValue}\n`;
    
    const existingHistory = localStorage.getItem('textHistory') || '';
    const newHistory = existingHistory + entry;
    
    localStorage.setItem('textHistory', newHistory);
    outputText.textContent = newHistory;
    inputText.value = '';
});
clearText.addEventListener('click', () => {
    localStorage.removeItem('textHistory');
    outputText.textContent = '';
});

function loadData() {
    const savedData = localStorage.getItem('textHistory');
    if (savedData) {
        outputText.textContent = savedData;
    }
};
loadData();
