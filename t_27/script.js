const imageVariants = [
    {link: './1.png'},
    {link: './2.png'},
    {link: './3.png'},
    {link: './4.png'},
    {link: './5.png'},
    {link: './6.png'},
    {link: './7.png'},
    {link: './8.png'},
    {link: './9.png'},
    {link: './10.png'},
    {link: './11.png'},
    {link: './12.png'},
    {link: './13.png'},
    {link: './14.png'},
    {link: './15.png'},
    {link: './16.png'},
]

const screen = document.querySelector('.image-slider');

const leftButton = document.querySelector('.left');

const rightButton = document.querySelector('.right');

const globalLeftButton = document.querySelector('.global-left');

const globalRightButton = document.querySelector('.global-right');

const randomButton = document.querySelector('.random');

const autoButton = document.querySelector('.auto');

let count = 0;

leftButton.addEventListener('click', () => {
      screen.style.animationName = 'slideOutLeft';
    
    setTimeout(() => {
        count--;
        if (count < 0) {
            count = 15;
        }
        
        screen.src = imageVariants[count].link;
        screen.style.animationName = 'none';
        
        setTimeout(() => {
            screen.style.animationName = ''; 
        }, 1);
    }, 400);
})

rightButton.addEventListener('click', () => {
    screen.style.animationName = 'slideOutRight';

    setTimeout(() => {
        count++;
        if (count > 15) {
            count = 0;
        }
        
        screen.src = imageVariants[count].link;
        screen.style.animationName = 'none';
        
        setTimeout(() => {
            screen.style.animationName = ''; 
        }, 1);
    }, 400);
})

globalLeftButton.addEventListener('click', () => {
    for (let i = 0; i < count;) {
        screen.style.animationName = 'slideOutLeft';
        count--
        setTimeout(() => {
        if (count < 0) {
            count = 0;
        }
        
        screen.src = imageVariants[count].link;
        screen.style.animationName = 'none';
        
        setTimeout(() => {
            screen.style.animationName = ''; 
        }, 1);
    }, 400);
    }
})

globalRightButton.addEventListener('click', () => {
    for (let i = 15; i > count;) {
        screen.style.animationName = 'slideOutRight';
        count++
        setTimeout(() => {
        if (count < 15) {
            count = 15;
        }
        
        screen.src = imageVariants[count].link;
        screen.style.animationName = 'none';
        
        setTimeout(() => {
            screen.style.animationName = ''; 
        }, 1);
    }, 400);
    }
})

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

randomButton.addEventListener('click', () => {
    const mathRandom = getRandomInt(0, 15);
    
    screen.style.animationName = 'slideOutRight';
    setTimeout(() => {
        screen.src = imageVariants[mathRandom].link;
        screen.style.animationName = 'none';
        
        setTimeout(() => {
            screen.style.animationName = ''; 
        }, 1);
    }, 400);
})

let autoPlayInterval = null;
let isPlaying = false;

autoButton.addEventListener('click', () => {
    if (isPlaying) {
        clearInterval(autoPlayInterval);
        isPlaying = false;
        return;
    }
    

    isPlaying = true;
    
    function nextSlide() {
        screen.style.animationName = 'slideOutRight';
        
        setTimeout(() => {
            count = (count + 1) % imageVariants.length;
            screen.src = imageVariants[count].link;
            screen.style.animationName = 'none';
            
            setTimeout(() => {
                screen.style.animationName = 'fadeIn';
                
                setTimeout(() => {
                    screen.style.animationName = '';
                }, 400);
            }, 1);
        }, 400);
    }
    
    nextSlide();
    
    autoPlayInterval = setInterval(nextSlide, 2000);
});