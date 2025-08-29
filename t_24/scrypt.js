let isHulk = false;

function transformation() {
    const hero = document.querySelector('#hero');
    const lab = document.querySelector('#lab');

    if (!isHulk) {

        hero.textContent = 'HULK';
        hero.style.fontSize = '130px';
        hero.style.letterSpacing = '6px';
        lab.style.backgroundColor = '#70964b';
        isHulk = true;
    } else {

        hero.textContent = 'Bruce Banner';
        hero.style.fontSize = '';
        hero.style.letterSpacing = '';
        lab.style.backgroundColor = '';
        isHulk = false;
    }
}