class Human {
    constructor() {
        this.firstName = "Peter";
        this.lastName = "Parker";
        this.gender = "male";
        this.age = 18;
        this.calories = 0;
        this.isHero = false;
    }

    updateDisplay(container) {
        if (!container) return;
        
        container.innerHTML = `
            <p>firstName: ${this.firstName}</p>
            <p>lastName: ${this.lastName}</p>
            <p>gender: ${this.gender}</p>
            <p>age: ${this.age}</p>
            <p>calories: ${this.calories}</p>
        `;
    }
}

class Hero extends Human {
    constructor(containerSelector, buttonsPrefix) {
        super();
        this.container = document.querySelector(containerSelector);
        this.buttonsPrefix = buttonsPrefix || '';
        this.updateDisplay(this.container);
        this.initButtons();
        this.setupHungerSystem();
    }

    initButtons() {
        document.querySelector(`.${this.buttonsPrefix}feed-btn`)?.addEventListener('click', () => this.feed());
        document.querySelector(`.${this.buttonsPrefix}transform-btn`)?.addEventListener('click', () => this.transformToHero());
        document.querySelector(`.${this.buttonsPrefix}fight-btn`)?.addEventListener('click', () => this.fightHero());
    }

    setupHungerSystem() {
        setInterval(() => {
            this.calories = Math.max(0, this.calories - 1);
            this.updateDisplay(this.container);
            if (this.calories < 500 && !this.isHero) {
                this.resetPhoto();
            }
        }, 300);
    }

    resetPhoto() {
    }

    feed() {
        if (this.calories > 500) {
            console.log("I'm not hungry!");
            return;
        }
        
        this.calories += 200;
        this.updateDisplay(this.container);
        
        setTimeout(() => {
            if (this.calories < 500) {
                console.log("I'm hungry!");
            }
        }, 1000);
    }

    transformToHero() {
    }

    fightHero() {
        if (!this.isHero) {
            console.log("I'm not a hero yet!");
            return;
        }

        if (this.calories >= 500) {
            console.log("I need to fight with villains!");
        } else {
            console.log("Not enough energy to fight!");
            this.resetPhoto();
        }
    }
}

class SpiderMan extends Hero {
    constructor() {
        super('.spiderman-container', 'spider-');
        this.firstName = "Peter";
        this.lastName = "Parker";
        this.updateDisplay(this.container);
        this.defaultPhoto = "./photos/SnapBG.ai_1747325593248.png";
        document.querySelector(".photo-changer-spider").src = this.defaultPhoto;
    }

    resetPhoto() {
        document.querySelector(".photo-changer-spider").src = this.defaultPhoto;
    }
    
    transformToHero() {
        if (this.calories >= 500) {
            this.isHero = true;
            this.updateDisplay(this.container);
            console.log("With great power comes great responsibility!");
            document.querySelector(".photo-changer-spider").src = "./photos/acetone-2025516-191415-147.png";
        } else {
            console.log("Need 500 calories to transform!");
            this.resetPhoto();
        }
    }

    fightHero() {
        if (this.calories >= 500) {
            document.querySelector(".photo-changer-spider").src = "./photos/SnapBG.ai_1747245647955.png";
        } 
        else {
            this.resetPhoto();
        }
    }
}

class Thor extends Hero {
    constructor() {
        super('.thor-container', 'thor-');
        this.firstName = "Thor";
        this.lastName = "Odinson";
        this.age = 1500;
        this.updateDisplay(this.container);
        this.defaultPhoto = "./photos/acetone-2025517-15152-789.png";
        document.querySelector(".photo-changer-thor").src = this.defaultPhoto;
    }

    resetPhoto() {
        document.querySelector(".photo-changer-thor").src = this.defaultPhoto;
    }

    transformToHero() {
        if (this.calories >= 500) {
            this.isHero = true;
            this.updateDisplay(this.container);
            console.log("I am Thor, king of Asgard!");
            document.querySelector(".photo-changer-thor").src = "./photos/acetone-2025517-1535-719.png";
        } 
        else {
            console.log("Need 500 calories to transform!");
            this.resetPhoto();
        }
    }

    fightHero() {
        if (this.calories >= 500) {
            console.log("For Asgard!");
            document.querySelector(".photo-changer-thor").src = "./photos/acetone-2025517-15323-570.png";
        } 
        else {
            console.log("Need 500 calories to transform!");
            this.resetPhoto();
        }
    }
}

class Hulk extends Hero {
    constructor() {
        super('.hulk-container', 'hulk-');
        this.firstName = "Brus";
        this.lastName = "Bener";
        this.age = 36;
        this.updateDisplay(this.container);
        this.defaultPhoto = "./photos/acetone-2025517-20921-224.png";
        document.querySelector(".photo-changer-hulk").src = this.defaultPhoto;
    }

    resetPhoto() {
        document.querySelector(".photo-changer-hulk").src = this.defaultPhoto;
    }

    transformToHero() {
        if (this.calories >= 500) {
            this.isHero = true;
            this.updateDisplay(this.container);
            console.log("I got angier!");
            document.querySelector(".photo-changer-hulk").src = "./photos/acetone-2025517-201037-115 (1).png";
        } else {
            this.resetPhoto();
        }
    }

    fightHero() {
        if (this.calories >= 500) {
            console.log("Hulk crush!");
            document.querySelector(".photo-changer-hulk").src = "./photos/SnapBG.ai_1747505527859.png";
        } else {
            this.resetPhoto();
        }
    }
}

window.onload = function() {
    const spiderMan = new SpiderMan();
    const thor = new Thor();
    const hulk = new Hulk();
};


var a = 'word'


if (true) {
    let b = 'number'
    b = 'another number'
}
b = 'third number'
console.log(b);
