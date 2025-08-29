function numberChanger() {
    let numbers = [];
    let odd = [];
    let even = [];
    
    for (let i = 1; i <= 10; i++) {
        let enter = prompt(`Enter  ${i} number:`);
      
        let num = Number(enter);

        if (!isNaN(num)) {
            numbers.push(num);
        
            if (num % 2 === 0) {
                even.push(num);
            } else {
                odd.push(num);
            }
        }
        else {
            alert('This is not a number!');
            continue;
        }
    }
    alert(`Odd is: ${odd}\nEven is: ${even}`);
}
numberChanger();