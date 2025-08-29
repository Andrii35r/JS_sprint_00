function HouseBuilder(address, description, owner, size, roomCount) {
    const house = {};
    house.address = address;
    house.description = description;
    house.owner = owner;
    house.size = size;
    house.roomCount = roomCount;
    house._averageBuildSpeed = 0.5;
    house.date = new Date();
    
    house.getDaysToBuild = function() {
        return this.size / this._averageBuildSpeed;
    };
    
    house.logHouseInfo = function() {
        console.groupCollapsed(`Заданные параметры адреса: ${this.address}`);
        console.log(`Заданные параметры плана: ${this.description}`);
        console.log(`Заданные параметры хозяина(хозяйки): ${this.owner}`);
        console.log(`Заданные параметры размера дома: ${this.size}`);
        console.log(`Заданные параметры количества комнат: ${this.roomCount}`);
        console.groupEnd();
    };
    
    house.wordReplace = function(oldValue, newValue) {
        if (this.address === oldValue) {
            this.address = newValue;
        }
        return this;
    };

    house.wordInsertAfter = function(targetWord, wordToInsert) {
        if (this.description.includes(targetWord)) {
            this.description = this.description.replace(targetWord, targetWord + wordToInsert);
        }
        return this;
    };

    house.wordDelete = function(wordToRemove) {
        if (this.owner.includes(wordToRemove)) {
            this.owner = this.owner.replace(wordToRemove, '').replace(/\s+/g, ' ')
        }
        return this;
    };

    return house;
}

const house = new HouseBuilder(
    '88 Crescent Avenue',
    'Spacious town house with wood flooring, 2-car garage, and a back patio.',
    'J. Smith',
    110,
    5
);

house.wordReplace('88 Crescent Avenue', '123 Ocean Drive');
house.logHouseInfo();

house.wordInsertAfter('and a back patio', ' and little dog house');
house.logHouseInfo();

house.wordDelete('Smith');
house.logHouseInfo();

console.log(`Время постройки: ${house.getDaysToBuild()} дней`);























// house = new HouseBuilder('42 Maple Street',
// 'Modern apartment with large windows, balcony, and open-plan kitchen.',
// 'A. Johnson',
// 85,
// 3);

// const secondDaysToBuild = house.getDaysToBuild();
// console.log(`Сумма времени на постройку дома: ${secondDaysToBuild}`);

// house = new HouseBuilder('15 Oak Drive',
// 'Cozy cottage with fireplace, garden, and attic space.',
// 'M. Williams',
// 75,
// 2);

// console.log(3);

// console.groupCollapsed(`Заданные параметры адреса: ${house.address}`);
// console.log(`Заданные параметры плана: ${house.description}`);
// console.log(`Заданные параметры хозяина(хозяйки): ${house.owner}`);
// console.log(`Заданные параметры размера дома: ${house.size}`);
// console.log(`Заданные параметры количества комнат: ${house.roomCount}`);
// console.groupEnd();

// const thirdDaysToBuild = house.getDaysToBuild();
// console.log(`Сумма времени на постройку дома: ${thirdDaysToBuild}`);

// house = new HouseBuilder('7 Pine Road',
// 'Luxury villa with swimming pool, 3 bedrooms, and panoramic views.',
// 'R. Brown',
// 200,
// 4);

// console.log(4);

// console.groupCollapsed(`Заданные параметры адреса: ${house.address}`);
// console.log(`Заданные параметры плана: ${house.description}`);
// console.log(`Заданные параметры хозяина(хозяйки): ${house.owner}`);
// console.log(`Заданные параметры размера дома: ${house.size}`);
// console.log(`Заданные параметры количества комнат: ${house.roomCount}`);
// console.groupEnd();

// const fourthDaysToBuild = house.getDaysToBuild();
// console.log(`Сумма времени на постройку дома: ${fourthDaysToBuild}`);

// house = new HouseBuilder('23 Birch Lane',
// 'Two-story house with home office, garage, and backyard deck.',
// 'T. Davis',
// 150,
// 5);

// console.log(5);

// console.groupCollapsed(`Заданные параметры адреса: ${house.address}`);
// console.log(`Заданные параметры плана: ${house.description}`);
// console.log(`Заданные параметры хозяина(хозяйки): ${house.owner}`);
// console.log(`Заданные параметры размера дома: ${house.size}`);
// console.log(`Заданные параметры количества комнат: ${house.roomCount}`);
// console.groupEnd();

// const fifthDaysToBuild = house.getDaysToBuild();
// console.log(`Сумма времени на постройку дома: ${fifthDaysToBuild}`);

