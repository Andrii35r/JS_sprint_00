document.addEventListener('DOMContentLoaded', () => {
    const stones = document.querySelectorAll('.function');
    const minDistance = 150; // Увеличенный отступ между элементами
    const padding = 60; // Увеличенный отступ от краёв
    const maxAttempts = 500; // Больше попыток для лучшего размещения
    
    // Проверка валидности позиции
    function isPositionValid(newX, newY, placedStones) {
        return placedStones.every(stone => {
            const dx = stone.x - newX;
            const dy = stone.y - newY;
            return Math.sqrt(dx * dx + dy * dy) >= minDistance;
        });
    }
    
    // Размещение камней
    function placeStones() {
        const placedStones = [];
        const maxX = window.innerWidth - 100 - padding * 2;
        const maxY = window.innerHeight - 100 - padding * 2;
        
        stones.forEach((stone, index) => {
            let attempts = 0;
            let placed = false;
            
            // Пытаемся найти подходящую позицию
            while (!placed && attempts < maxAttempts) {
                attempts++;
                const newX = padding + Math.random() * maxX;
                const newY = padding + Math.random() * maxY;
                
                if (isPositionValid(newX, newY, placedStones)) {
                    stone.style.left = `${newX}px`;
                    stone.style.top = `${newY}px`;
                    placedStones.push({ x: newX, y: newY });
                    placed = true;
                    
                    // Плавное появление с задержкой
                    setTimeout(() => {
                        stone.style.opacity = '1';
                    }, index * 100);
                }
            }
            
            // Если не нашли идеальное место - размещаем как есть
            if (!placed) {
                const newX = padding + Math.random() * maxX;
                const newY = padding + Math.random() * maxY;
                stone.style.left = `${newX}px`;
                stone.style.top = `${newY}px`;
                setTimeout(() => {
                    stone.style.opacity = '1';
                }, index * 100);
            }
        });
    }
    
    // Вызываем только при загрузке
    placeStones();
    
    // Отключаем ресайз, если нужно
    // window.addEventListener('resize', () => {});
});