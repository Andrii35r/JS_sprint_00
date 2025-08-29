let number;
do {
    number = prompt("Enter a number from 1 to 10");
    number = Number(number);
} 

while (!Number.isInteger(number) || number < 1 || number > 10) {
    //:9
}

if (!Number.isInteger(number) || number < 1 || number > 10) {
    alert('Number must be from 1 to 10');
}

if (number === 1) {
    alert("Back to square 1")
}
else if (number === 2) {
    alert("Goody 2-shoes")
}
else if (number === 3 || number === 6) {
    alert("Two's company, three's a crowd")
}
else if (number === 4 || number === 9) {
    alert("Counting sheep")
}
else if (number === 5) {
    alert("Take five")
}
else if (number === 7) {
    alert("Seventh heaven")
}
else if (number === 8) {
    alert("Behind the eight-ball")
}
else if (number === 10) {
    alert("Cheaper by the dozen")
}
