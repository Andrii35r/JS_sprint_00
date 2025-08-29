function guestsList(guests) {

const users = [
    {nameUser: 'Emily Johnson'},
    {nameUser: 'Michael Williams'},
    {nameUser: 'Sophia Brown'},
    {nameUser: 'Daniel Davis'},
    {nameUser: 'Olivia Miller'},
    {nameUser: 'James Wilson'},
    {nameUser: 'Ava Taylor'},
    {nameUser: 'Benjamin Anderson'},
    {nameUser: 'Charlotte Martinez'},
    {nameUser: 'William Thompson'}
];

guests = new WeakSet();

for (let i = 0; i < 10; i++) {
    guests.add(users[i]);
}

console.log();

console.log(guests.has(users[5]));

guests.delete(users[5]);

console.log(guests.has(users[5]));
}

guestsList()

function menu(list) {
    const dishes = [
        ['Margherita Pizza', '12.50$'],
        ['Beef Burger', '9.80$'],
        ['Chicken Caesar Salad', '8.20$'],
        ['Spaghetti Carbonara', '11.30$'],
        ['Grilled Salmon', '15.90$'],
        ['Vegetable Stir Fry', '7.50$'],
        ['Chocolate Brownie', '4.50$'],
        ['Mushroom Risotto', '10.40$'],
        ['BBQ Ribs', '13.75$'],
        ['Tiramisu', '6.25$']
    ];
    
    list = new Map(dishes);

    console.log(list);
    console.log(list.get('Vegetable Stir Fry'));
    console.log(list.has('Vegetable Stir Fry'));
    list.delete('Vegetable Stir Fry');
    console.log(list);
}

menu();

function bankVault(bank) {
    bank = new WeakMap();

    const safes = [
        { id: 'rgrbds12s' },
        { id: 'srdf54ghy45' },
        { id: 'tdfg54hy' },
        { id: 'fer456gfd' },
        { id: 'sgfety74' },
        { id: 'rwe5fb3' },
        { id: 'we34050f' },
        { id: 'wfw40392' },
        { id: 'erf74832r' }
    ];

    const amounts = ['5.00$', '1006.00$', '600.00$', '12344.04$', '233.00$', '1000000.00$', '12.02$', '909.00$', '24345.03$'];
    
    safes.forEach((safe, index) => {
        bank.set(safe, amounts[index]);
    });

    const safeToCheck = safes[4];
    console.log(bank.get(safeToCheck));
    console.log(bank.has(safeToCheck));
    bank.delete(safeToCheck);
    console.log(bank.has(safeToCheck));
}

bankVault();

function coinCollection() {
    const users = [
        {money: 'Silver Dollar'},
        {money: 'Yen Coin'},
        {money: 'Euro Coin'},
        {money: 'Coin'},
        {money: 'Loonie'},
        {money: 'Kangaroo Dollar'},
        {money: 'Franc Coin'},
        {money: 'Libertad Silver Coin'},
        {money: 'Rupee Coin'},
        {money: 'Krugerrand'}
    ];

    const coins = new WeakMap();

    for (let i = 0; i < users.length; i++) {
        coins.set(users[i]);
    }

    console.log(coins);
    
    console.log(coins.has(users[0]));
    coins.delete(users[0]);
    console.log(coins.has(users[0]));
}

coinCollection();