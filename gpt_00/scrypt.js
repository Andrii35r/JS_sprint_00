const button = document.getElementById('my-button');
const submitBtn = document.getElementById('submit-button');


button.addEventListener('click', function() {
    alert('Yes of course!');
});

const form = document.getElementById('my-opinion');

form.addEventListener('submit', function(e) {
  e.preventDefault(); 

  const selectedOption = document.querySelector('input[name="choice"]:checked');
  
  if (selectedOption) {

    if (selectedOption.value === 'approve') {
      window.open('https://open.spotify.com/track/1IFrnZEg64PhLkN6odmgCC', '_blank');
    } else {
      window.open('https://learn.javascript.ru', '_blank');
    }
  } else {

    alert('Pleese choose 1st wariant!');
  }
});