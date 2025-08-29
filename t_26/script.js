//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const superheroList = [
    {name: '𝔑𝔞𝔪𝔢', strength: '𝔖𝔱𝔯𝔢𝔫𝔤𝔥𝔱', age: '𝔄𝔤𝔢'},
    {name: '𝘽𝙡𝙖𝙘𝙠 𝙋𝙖𝙣𝙩𝙝𝙚𝙧', strength: '66', age: 'ƼӠ'},
    {name: '𝘾𝙖𝙥𝙞𝙩𝙖𝙣 𝘼𝙢𝙚𝙧𝙞𝙘𝙖', strength: '79', age: '1Ӡ7'},
    {name: '𝘾𝙖𝙥𝙞𝙩𝙖𝙣 𝙈𝙖𝙧𝙫𝙚𝙡', strength: '97', age: 'ϩϬ'},
    {name: '𝙃𝙪𝙡𝙠', strength: ' 80', age: '५9'},
    {name: '𝙄𝙧𝙤𝙣 𝙈𝙖𝙣', strength: '88', age: '५8'},
    {name: '𝙎𝙥𝙞𝙙𝙚𝙧-𝙢𝙖𝙣', strength: '78', age: '1Ϭ'},
    {name: '𝙏𝙝𝙖𝙣𝙤𝙨', strength: '99', age: '1000'},
    {name: '𝙏𝙝𝙤𝙧', strength: '95', age: '1000'},
    {name: '𝙔𝙤𝙣-𝙍𝙤𝙜𝙜', strength: '73', age: 'Ƽϩ'}
];

const ageMapping = {
    'ƼӠ': 53,
    '1Ӡ7': 137,
    'ϩϬ': 26,
    '५9': 49,
    '५8': 48,
    '1Ϭ': 16,
    '1000': 1000,
    'Ƽϩ': 52
};
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const defaultButtonImg = document.createElement('img');
defaultButtonImg.classList.add('default-button-img');


defaultButtonImg.src = './refresh.png';

const defaultButton = document.createElement('div');
defaultButton.classList.add('default-button');
defaultButton.appendChild(defaultButtonImg);

defaultButton.addEventListener('click', () => {

    console.log('Reset button clicked!');
});

document.body.appendChild(defaultButton);
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const table = document.createElement("table");
table.classList.add('table');
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const firstRow = document.createElement("tr");
const nameHeader = document.createElement("td");
nameHeader.textContent = superheroList[0].name;
nameHeader.classList.add('top-table-name');
firstRow.appendChild(nameHeader);
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const strengthHeader = document.createElement("td");
strengthHeader.textContent = superheroList[0].strength;
strengthHeader.classList.add('top-table-strenght');
firstRow.appendChild(strengthHeader);
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const ageHeader = document.createElement("td");
ageHeader.textContent = superheroList[0].age;
ageHeader.classList.add('top-table-age');
firstRow.appendChild(ageHeader);
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
table.appendChild(firstRow);
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
for(let i = 1; i < superheroList.length; i++) {
    const row = document.createElement("tr");
    
    const nameCell = document.createElement("td");
    nameCell.textContent = superheroList[i].name;
    nameCell.classList.add('bottom-table-name');
    row.appendChild(nameCell);
    
    const strengthCell = document.createElement("td");
    strengthCell.textContent = superheroList[i].strength;
    strengthCell.classList.add('bottom-table-strenght');
    row.appendChild(strengthCell);
    
    const ageCell = document.createElement("td");
    ageCell.textContent = superheroList[i].age;
    ageCell.classList.add('bottom-table-age');
    row.appendChild(ageCell);
    
    table.appendChild(row);
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
document.body.appendChild(table);
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const nameButton = document.querySelector('.top-table-name')
const strengthButton = document.querySelector('.top-table-strenght')
const ageButton = document.querySelector('.top-table-age')
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let isSorted = false;

nameButton.addEventListener('mouseup', () => {
    ageHeader.style.backgroundColor = "#d80000";
    strengthHeader.style.backgroundColor = "#d80000";
    const rows = Array.from(table.querySelectorAll('tr')).slice(1);
    let cycle = true;
    do {
        if (isSorted) {
            rows.sort((a, b) => {
                const nameA = a.querySelector('.bottom-table-name').textContent;
                const nameB = b.querySelector('.bottom-table-name').textContent;
                nameHeader.style.backgroundColor = "#d80000";
                return nameA.localeCompare(nameB);
            });
        } else {
            rows.sort((a, b) => {
                const nameA = a.querySelector('.bottom-table-name').textContent;
                const nameB = b.querySelector('.bottom-table-name').textContent;
                nameHeader.style.backgroundColor = '#f21000';
                return nameB.localeCompare(nameA);
            });
        }
        cycle = false;
    } while (cycle);
    
    rows.forEach(row => table.appendChild(row));
    isSorted = !isSorted;
});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function bubbleSort(rows, compareFn) {
    let len = rows.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (compareFn(rows[j], rows[j + 1])) {
                [rows[j], rows[j + 1]] = [rows[j + 1], rows[j]];
            }
        }
    }
    return rows;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
strengthButton.addEventListener('mouseup', () => {
    const rows = Array.from(table.querySelectorAll('tr')).slice(1);
    
    bubbleSort(rows, (a, b) => {
        const numA = parseInt(a.querySelector('.bottom-table-strenght').textContent);
        const numB = parseInt(b.querySelector('.bottom-table-strenght').textContent);
        strengthHeader.style.backgroundColor = isSorted ? "#d80000" : "#f21000";
        return isSorted ? numA > numB : numA < numB;
    });
    
    rows.forEach(row => table.appendChild(row));
    isSorted = !isSorted;
});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
ageButton.addEventListener('mouseup', () => {
    const rows = Array.from(table.querySelectorAll('tr')).slice(1);
    
    bubbleSort(rows, (a, b) => {
        const strA = a.querySelector('.bottom-table-age').textContent;
        const strB = b.querySelector('.bottom-table-age').textContent;
        const numA = ageMapping[strA];
        const numB = ageMapping[strB];
        ageHeader.style.backgroundColor = isSorted ? "#d80000" : "#f21000";
        return isSorted ? numA > numB : numA < numB;
    });
    
    rows.forEach(row => table.appendChild(row));
    isSorted = !isSorted;
});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
defaultButton.addEventListener('click', () => {

    while(table.rows.length > 1) {
        table.deleteRow(1);
    }
    

    for(let i = 1; i < superheroList.length; i++) {
        const row = document.createElement("tr");
        
        const nameCell = document.createElement("td");
        nameCell.textContent = superheroList[i].name;
        nameCell.classList.add('bottom-table-name');
        row.appendChild(nameCell);
        
        const strengthCell = document.createElement("td");
        strengthCell.textContent = superheroList[i].strength;
        strengthCell.classList.add('bottom-table-strenght');
        row.appendChild(strengthCell);
        
        const ageCell = document.createElement("td");
        ageCell.textContent = superheroList[i].age;
        ageCell.classList.add('bottom-table-age');
        row.appendChild(ageCell);
        
        table.appendChild(row);
    }
    
    nameHeader.style.backgroundColor = "";
    strengthHeader.style.backgroundColor = "";
    ageHeader.style.backgroundColor = "";
    
    isSorted = false;
});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~