const numbersHistory = [];
let currentValue = 1;

function stepGenerator() {
    numbersHistory.push(currentValue)
    while (true) {
        const input = prompt(`Previous result: ${currentValue}. Enter a new number:`);
        
        if (input === null) {
            console.log("Generator terminated by user");
            return;
        }
        
        const number = Number(input);
        
        if (isNaN(number)) {
            console.error("Invalid number!");
            continue;
        }

        console.log(`Past number ${currentValue}`);

        numbersHistory.push(number);
        const equalessNumber = currentValue += number;

        console.log(`Second number: ${number}. Answer: ${equalessNumber}`);

        if (currentValue > 10000) {
            console.log(`Value: ${currentValue} exceeds 10000. Resetting to 1.`);
            currentValue = 1;
        }
    }
}

stepGenerator();
