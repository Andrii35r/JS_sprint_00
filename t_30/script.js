function loadImages() {
  const images = document.querySelectorAll('img[data-src]');
  
  images.forEach(img => {
    const imgPosition = img.getBoundingClientRect();
    
    if (imgPosition.top < window.innerHeight && imgPosition.bottom > 0 && imgPosition.left < window.innerWidth && imgPosition.right > 0) {
      img.src = img.getAttribute('data-src');
      img.removeAttribute('data-src');
    }
  });
}

function simpleThrottle(func, delay) {
  let canRun = true;
  
  return function() {
    if (canRun) {
      func();
      canRun = false;
      setTimeout(() => canRun = true, delay);
    }
  };
}

window.addEventListener('scroll', simpleThrottle(loadImages, 300));
window.addEventListener('resize', simpleThrottle(loadImages, 300));
window.addEventListener('load', loadImages);