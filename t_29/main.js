const buttons = document.querySelectorAll('.function');

buttons.forEach(button => {
    let isDragging = false;
    let setX = 0
    let setY = 0;

    button.addEventListener('click', () => {
        if (button.style.border.includes('dashed')) {
            button.style.border = '8px solid rgb(0, 0, 0)';
        } 
        else {
            button.style.border = '8px dashed rgb(0, 0, 0)';
        }
    });

    button.addEventListener('mousedown', (e) => {
        if (!button.style.border.includes('dashed')) return;
        
        isDragging = true;
        
        const rect = button.getBoundingClientRect();
        setX = e.clientX - rect.left;
        osetY = e.clientY - rect.top;
        
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        
        button.style.left = (e.clientX - setX) + 'px';
        button.style.top = (e.clientY - setY) + 'px';
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
});