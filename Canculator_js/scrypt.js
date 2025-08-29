//-----------------------------------------------------------------------------
// Обьявление переменной с помощью функции querySelector('.screen-text');      
// Функция querySelector(Выбор элементов элементов в документе);               
// Функция querySelectorAll(Выбор всех элементов в документе);                 
// Задача - получить доступ к тегам HTML;                                      
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
const screenInput = document.querySelector('.screen-text');                    
const numbersButton = document.querySelectorAll('.number-button');             
const resetButton = document.querySelector('.reset-button');                   
const backspaceButton = document.querySelector('.backspace-button');           
const symbolsButton = document.querySelectorAll('.symbols-button');            
const sSepButton = document.querySelectorAll('.separator-symbols-button');     
const dotSymbolbutton = document.querySelector('.dot-symbol-button');          
const equalsButton = document.querySelector('.equals-button');                 
const piButton = document.querySelector('.p-symbol-button');                   
const screenExample = document.querySelector('.screen-example-text');          
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
setTimeout(() => screenInput.focus(), 0);                                      
                                                                               
screenInput.addEventListener('blur', () => {                                   
  setTimeout(() => screenInput.focus(), 0);                                    
});                                                                            
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
screenInput.addEventListener('keydown', function(e) {                          
                                                                               
const key = e.key;                                                             
                                                                               
if (key >= '0' && key <= '9') {                                                
    if (screenInput.value === '0') {                                           
                                                                               
        screenInput.value = key;                                               
                                                                               
        e.preventDefault();                                                    
                                                                               
    }                                                                          
    else if (screenInput.value === '0') {                                      
        screenInput.value = '0';                                               
    }                                                                          
    }                                                                          
});                                                                            
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
// Обьявление события!                                                         
// forEach(Функция выполняющяя действие один раз для каждого элемента массива);
// addEventListener(Функция добавляет обработчик события к элементу);          
// Задача - при нажатии на любой button класса .number-button его строка       
// выводится на экран с помошью присваивания если screenInput.value === '0' в  
// инном случае происходит присваивание со сложением.                          
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
numbersButton.forEach(button => {                                              
    button.addEventListener('click', (e) => {                                  
        if (screenInput.value === '0') {                                       
            screenInput.value = e.target.innerText;                            
            return;                                                            
        }                                                                      
        screenInput.value += e.target.innerText;                               
    });                                                                        
});                                                                            
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
// Обьявление события!                                                         
// addEventListener(Функция добавляет обработчик события к элементу);          
// Задача - при нажатии на button класса .reset-button присваивания строка '0';
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
resetButton.addEventListener('click', () => {                                  
    screenInput.value = '0';                                                   
    screenExample.value = ''                                                   
});                                                                            
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
// slice(Используется для вырезания или копирования) части строки или массива);
// Обьявление события!                                                         
// slice(Используется для вырезания или копирования) части строки или массива);
// addEventListener(Функция добавляет обработчик события к элементу);          
// Задача - при нажатии на button класса .backspace-button происходит          
// логическая операция при которой выполняется присваивание с функцией         
// slice(1) в инном случае происходит присваивание строки '0';                 
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
backspaceButton.addEventListener('click', () => {                              
    if (screenInput.value.length > 1) {                                        
        screenInput.value = screenInput.value.slice(0, -1);                    
        return;                                                                
    }                                                                          
    screenInput.value = '0';                                                   
                                                                               
});                                                                            
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
// Обьявление события!                                                         
// forEach(Функция выполняющяя действие один раз для каждого элемента массива);
// addEventListener(Функция добавляет обработчик события к элементу);          
// Задача - при нажатии на любой button класса .symbols-button его строка      
// выводится на экран с помошью присваивания со сложением;                     
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
symbolsButton.forEach(button => {                                              
    button.addEventListener('click', (e) => {                                  
        screenInput.value += e.target.innerText;                               
    });                                                                        
});                                                                            
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
// Обьявление события!                                                         
// forEach(Функция выполняющяя действие один раз для каждого элемента массива);
// addEventListener(Функция добавляет обработчик события к элементу);          
// Задача - при нажатии на любой button класса .symbols-button его строка      
// выводится на экран с помошью присваивания со сложением;                     
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
sSepButton.forEach(button => {                                                 
    button.addEventListener('click', (e) => {                                  
        if (screenInput.value === '0') {                                       
            screenInput.value = e.target.innerText;                            
            return;                                                            
        }                                                                      
        screenInput.value += e.target.innerText;                               
    });                                                                        
});                                                                            
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
// addEventListener(Функция добавляет обработчик события к элементу);          
// Задача - при нажатии на любой button класса .dot-symbol-button его строка   
// выводится на экран с помошью присваивания со сложением;                     
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
dotSymbolbutton.addEventListener('click', () => {                              
    const inputValue = screenInput.value;                                      
    const lastChar = inputValue.slice(-1);                                     
    const lastNumber = inputValue.split(/[\+\-\*\/]/).pop();                   
    if (!['+', '-', '*', '/'].includes(lastChar) &&                            
        !lastNumber.includes(' .') &&                                          
            lastNumber.length > 0) {                                           
        screenInput.value += dotSymbolbutton.innerText;                        
    }                                                                          
});                                                                            
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
// Обьявление события!                                                         
// addEventListener(Функция добавляет обработчик события к элементу);          
// Задача - при нажатии на любой button класса .separator-symbols-button его   
// строка выводится на экран с помошью присваивания со сложением;              
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
piButton.addEventListener('click', () => {                                     
    if (screenInput.value === '0') {                                           
        screenInput.value = piButton.innerText;                                
        return;                                                                
    }                                                                          
    screenInput.value += piButton.innerText;                                   
});                                                                            
//-----------------------------------------------------------------------------
// Обьявление события!                                                         
// addEventListener(Функция добавляет обработчик события к элементу);          
//--------------------------------------------------------------------------------------------
function calculateExpression(expression) {
    // Логическаяя операция if(){} Проверяет и возвращяет  строку Error если
    // тип (typeof) expression не является строкой;
    if (typeof expression !== 'string') {
        return screenInput.value = 'Error';
    }
    // C помощью replace() ищет совпадения с заданными параметрами, замена 
    // числа всех<--(/p/g) п на встроеную константу Math.PI и встроеную 
    // функцию toString(); которая преобразует другие типы данных в строку;
    expression = expression.replace(/π/g, Math.PI.toString());

    // Использование регулярного выражения,
    // C помощью метода test() проверяет соотвецтвует ли строка заданному 
    // регулярному выражению (Возвращяет true или false)
    if (!/^[\d+\-*\/()\.π]+$/.test(expression)) {
        // Логическаяя операция if(){} Проверяет и возвращяет  строку Error если
        // в строке находится лишний елемент;
        return screenInput.value = 'Error';
    }
    // Обьявление функции с аргументом processMul(expr);
    // Обьявление переменной parts которая присваивает значение аргумента expr, и 
    function processMul(expr)  {
        // разделяет регулярные выражения на елементы массива в строке,
        const parts = expr.split(/([*/])/);
        // Обьявление переменной result присваивает значение аргумента parts и 
        // превращения в дробное число при помощи parseFloat.
        let result = parseFloat(parts[0]);
        // Обьявление оператора цикла, обьявление переменной i...
        for (let i = 1; i < parts.length; i += 2) {
            // Обьявление переменной operator которая присваивает parts[i].
            const operator = parts[i];
            // Обьявление переменной num которая присваивает parts[i+1] и 
            // превращения в дробное число при помощи parseFloat.
            const num = parseFloat(parts[i+1]);
            // Логическаяя операция if(){} Проверяет и возвращяет  строку NaN если
            // num не является номером (isNaN);
            if (isNaN(num)) {
                return screenInput.value = 'Error';
            }
            // Логическаяя операция if(){} Проверяет и присваивает с умножением num;
            if (operator === '*') {
                result *= num;
            } 
            // Логическаяя операция else if(){} Проверяет и присваивает с делениеим num
            // Логическаяя операция if(){} и выводит 'Error' num рaвняется === 0;
            else if (operator === '/') {
                if (num === 0) {
                    return screenInput.value = 'Error';
                }
                result /= num;
            }
        }
        // Возврат значения result.
        return result;
    };
    // Обьявление функции с аргументом process(expr);
    // Обьявление переменной parts которая присваивает значение аргумента expr, и 
    function process(expr) {
        // разделяет регулярные выражения на елементы массива в строке,
        const parts = expr.split(/([+-])/);
        // Объявление переменной result присваивает значение аргумента parts и 
        // превращения в дробное число при помощи processMul.
        let result = processMul(parts[0]);
        // Обьявление оператора цикла, обьявление переменной i...
        for (let i = 1; i < parts.length; i += 2) {
            // Обьявление переменной operator которая присваивает parts[i].
            const operator = parts[i];
            // Обьявление переменной num которая присваивает parts[i+1] и 
            // превращения в дробное число при помощи processMul.
            const num = processMul(parts[i+1]);
            // Логическаяя операция if(){} Проверяет является ли переменная 
            // result или (||) num не бесконечным, если возвращяет true 
            // то возвращяет result;
            if (!isFinite(result) || !isFinite(num)) {
                return result;
            }
            // Логическаяя операция if(){} Проверяет и присваивает со сложением num;
            if (operator === '+') {
                result += num;
            } 
            // Логическаяя операция else if(){} Проверяет и присваивает с вычислением num
            else if (operator === '-') {
                result -= num;
            }
        }
        // Возврат значения result.
        return result;
    };
    
    // Обработка скобок с помощью цикла while 
    while (expression.includes('(')) {
        // Присваивание регулярных выражений с функцией replace();
        expression = expression.replace(/\(([^()]+)\)/g, (_, innerExpr) => {
            // Обьявление переменной res и присваивает innerExpr в функцию process();
            const res = process(innerExpr);
            // Возвращение isFinite(res);
            return isFinite(res) ? res.toString() : 'NaN';
        });
    }
    // Объявление переменной result и присваивание expression c функцией process();
    const result = process(expression);
    // Логическаяя операция if(){} Проверяет и является ли result не числом и при 
    // true  возвращяет строку 'Error';
    if (isNaN(result)) {
        return screenInput.value = 'Error';
    }  
    // Объявление переменной rounded и присваивание переменной result 
    const rounded = Math.round(result * 1e8) / 1e8;
    return rounded.toString().replace(/(\.\d*?[1-9])0+$|\.0+$/, '$1');
}
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
equalsButton.addEventListener('click', () => {
    screenExample.animate([
        {opacity: 0},
        {opacity: 0.25},
        {opacity: 0.50},
        {opacity: 0.75},
        {opacity: 1}
      ], {
        duration: 1000,
      });
    screenExample.value = screenInput.value;
    // Обьявление функции с аргументом calculateExpression(expression);
    // Объявление переменной expression и присваивание screenInput.value; 
    const expression = screenInput.value;
    // Объявление переменной result и присваивание calculateExpression(expression); 
    const result = calculateExpression(expression);
    // Присваивание screenInput.value переменную result;
    screenInput.value = result;
});
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        screenExample.animate([
            {opacity: 0},
            {opacity: 0.25},
            {opacity: 0.50},
            {opacity: 0.75},
            {opacity: 1}
          ], {
            duration: 1000,
          });
        screenExample.value = screenInput.value;
        // Обьявление функции с аргументом calculateExpression(expression);
        // Объявление переменной expression и присваивание screenInput.value; 
        const expression = screenInput.value;
        // Объявление переменной result и присваивание calculateExpression(expression); 
        const result = calculateExpression(expression);
        // Присваивание screenInput.value переменную result;
        screenInput.value = result;
    }
});