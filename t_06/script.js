function userData() {
    let name = prompt('Enter your name:', 'Unknown');
    let surname = prompt('Enter your surname:', 'Unknown');
    
    if (!isNaN(name)) {
        alert('Invalid input:');
        return name;  
    }
    else if (!isNaN(surname)) {
        alert('Invalid input:');
        return surname; 
    }
    else {
        if (name[0] === name[0].toLowerCase()) {
            name = name[0].toUpperCase() + name.slice(1);
          }
        if (surname[0] === surname[0].toLowerCase()) {
            surname = surname[0].toUpperCase() + surname.slice(1);
        }
        alert(`Hello ${name} ${surname}.`);
        console.log(`Hello ${name} ${surname}.`);
    }
}

userData();