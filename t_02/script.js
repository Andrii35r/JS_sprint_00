function animalName() {
    const regex = /^[a-zA-Z]{1,20}$/;
    let animal;
    
    while (true) {
        animal = prompt('What animal is the superhero most similar to?');
        if (animal === null) {
            return null;
        }

        if (regex.test(animal)) {
            return animal;
        }
        alert('Input requirements: length <= 20, only one word that contains only letters');
    }
}

function genderName() {
    const regex = /^(male|female|)$/i;
    let gender;
    
    while (true) {
        gender = prompt('Is the superhero male or female? Leave blank if unknown or other.') || '';
        if (gender === null) {
            return null;
        }
        
        if (regex.test(gender)) {
            return gender || 'unknown';
        }
        alert('Input requirements: accepts only male, female, or blank (unknown)');
    }
}

function ageNumber() {
    const regex = /^[1-9]\d{0,4}$/; 
    let age;
    
    while (true) {
        age = prompt('How old is the superhero?');
        if (age === null) {
            return null;
        }
        
        if (regex.test(age)) {
            return age;
        }
        alert('Input requirements: length <= 5, only digits, cannot start with a zero!');
    }
}


function createSuperhero() {
    let animal = animalName();
    if (animal === null) return;
    
    let gender = genderName();
    if (gender === null) return;
    
    let age = ageNumber();
    if (age === null) return;
    
    let superheroNameAge;
    if (gender.toLowerCase() === 'male' && age.toLowerCase() > 18 ) {
        superheroNameAge = `${animal}-man`;
    } else if (gender.toLowerCase() === 'female' && age.toLowerCase() > 18) {
        superheroNameAge = `${animal}-woman`;
    } else if (gender.toLowerCase() === 'male' && age.toLowerCase() < 18) {
        superheroNameAge = `${animal}-boy`;
    } else if (gender.toLowerCase() === 'female' && age.toLowerCase() < 18) {
        superheroNameAge = `${animal}-girl`;
    }else if (gender.toLowerCase() === null && age.toLowerCase() < 18) {
        superheroNameAge = `${animal}-kid`;
    } else if (gender.toLowerCase() === null && age.toLowerCase() > 18) {
        superheroNameAge = `${animal}-hero`;
    }
    
    alert(`The superhero is: ${superheroNameAge}`);
}


createSuperhero();



// function radiusCircle(circle) {
//     let x = 3.14 * circle ** 2;
//     return x;
// }

// const circle = radiusCircle(8);
// alert(`${circle}`);

// function createHTMLElement(tag, id, text) {
//     const element = document.createElement(tag);
//     element.id = id;
//     element.innerText = text;

//     return element;
// }

// const H1Element = createHTMLElement('h1', 'header1', 'Просто текст')
// // console.log(H1Element)
// document.body.append(H1Element)