function chooseNumber() {
    let yourNumber = prompt('Enter number between 1 to 100:', 0);
    
    if (/^[0-9][0-9]?$|^100$/.test(yourNumber)) {
        if (yourNumber === 0) {
            alert('This is not a valid number between 1 and 100!');
            return null;
        }
        else if (yourNumber % 3 === 0) {
            alert('Is a multiple of 3');
        }
        else if (yourNumber % 10 === 0) {
            alert('Is a multiple of 10');
        }
        else if (yourNumber % 2 === 0) {
            alert('Is even');
        }
        else {
            alert('-');
        }
        return yourNumber;
    } else {
        alert('This is not a valid number between 1 and 100!');
        return null;
    }
}

chooseNumber();