function enterPrice() {
    let firstPrice = prompt('Enter price first product:', 0.00);

    let secondPrice = prompt('Enter price second product:', 0.00);

    let thirdPrice = prompt('Enter price third product:', 0.00);



    if (!isNaN(firstPrice) | !isNaN(secondPrice) | !isNaN(thirdPrice)) {
        alert(`First product: ${firstPrice} $`);

        alert(`Second product: ${secondPrice} $`);

        alert(`Third product: ${thirdPrice} $`);

        let sum = Number(firstPrice) + Number(secondPrice) + Number(thirdPrice);
        sum = alert(`Sum product: ${sum} $`)
    }
    else  {
        alert('Invalid input, you must enter number!');
    }
}

enterPrice();