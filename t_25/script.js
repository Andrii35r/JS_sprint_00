const elementPeople = document.querySelectorAll('li')
elementPeople.forEach(item => {
    if (!item.className.includes('good') && !item.className.includes('evil')) {
        item.className += ' unknown';
    }
        
    if (!item.dataset.element) {
        item.dataset.element = 'none';
    }
        
    const elems = document.createElement('div');
    elems.className = 'elems';
        
    item.dataset.element.split(' ').forEach(el => {
        const circle = `<div class="elem ${el}"></div>`;
        elems.innerHTML += el === 'none' ? circle + '<div class="line"></div>' : circle;
    });
        
    item.innerHTML = `${item.textContent}${elems.outerHTML}`;
});