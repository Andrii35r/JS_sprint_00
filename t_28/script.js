const filmName = [
    {name: 'John Wick'},
    {name: 'Avengers: EndGame'},
    {name: 'Inception'},
];

const filmData = [
    {data: 'December 5, 2014'},
    {data: 'April 25, 2019'},
    {data: 'July 30, 2010'},
]

const filmActors = [
    {actors: 'Keanu Reeves'},
    {actors: 'Michael Nyqvist'},
    {actors: 'Alfie Allen'},
    {actors: 'Iain McShane'},
    {actors: 'Marcus'},
    {actors: 'Robert Downey Jr.'},
    {actors: 'Chris Evans'},
    {actors: 'Scarlett Johansson'},
    {actors: 'Chris Hemsworth'},
    {actors: 'Mark Ruffalo'},
    {actors: 'Leonardo DiCaprio'},
    {actors: 'Cillian Murphy'},
    {actors: 'Joseph Gordon-Levitt'},
    {actors: 'Tom Hardy'},
    {actors: 'Elliot Page'},
]

const filmText = [
    {text: 'John Wick is a 2014 American action thriller film directed by Chad Stahelski and David Leitch and written by Derek Kolstad. It follows John Wick (Keanu Reeves), a legendary hitman who has retired from crime but is forced to return to the criminal underworld to avenge the murder of his dog, the theft of his car, and a beating. The film also stars Michael Nyqvist, Alfie Allen, Adrianne Palicki, Bridget Moynahan, Dean Winters, Ian McShane, John Leguizamo, and Willem Dafoe.'},
    {text: 'Avengers: Endgame is a 2019 American superhero film based on Marvel Comics about the adventures of the superhero team the Avengers, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures. A direct sequel to the events of Avengers: Infinity War (2018), the 22nd film in the Marvel Cinematic Universe (MCU), the penultimate film in Phase 3 and the Infinity Saga. The film follows the surviving members of the Avengers and their allies as they attempt to reverse the destruction caused by Thanos (Brolin) in Infinity War.'},
    {text: 'Inception — the beginning of a process or organization, origin, source; according to the plot — the artificial initiation by third parties of the emergence of a certain idea in the mind of another person. — a 2010 science fiction action film, the seventh full-length film by director Christopher Nolan based on the idea of lucid dreaming. In the film, Leonardo DiCaprio plays a professional thief who steals information by penetrating the subconscious of his targets. He is offered to erase his criminal history as payment for introducing someone else\'s idea into the subconscious of the target.'},
]

const filmImg = [
    {img: './johnwick_5.jpg'},
    {img: './Avengers_Endgame_poster.jpg'},
    {img: './Poster_Inception_film_2010.jpg'}
]

const filmItems = document.querySelectorAll('.film-item');
const headText = document.querySelector('.head-text');
const innerText = document.querySelector('.inner-text');
const actors = document.querySelectorAll('.actor');
const allText = document.querySelector('.all-text');
const image = document.querySelector('.image');

for (let i = 0; i < filmItems.length; i++) {
    filmItems[i].addEventListener('click', function() {
        actors.forEach(actor => {
            actor.style.opacity = '1';
        });
        image.style.opacity = '1';
        headText.textContent = filmName[i].name;
        innerText.textContent = filmData[i].data;
        allText.textContent = filmText[i].text;
        image.src = filmImg[i].img;
        
        for (let a = 0; a < actors.length; a++) {
            actors[a].textContent = filmActors[i * 5 + a]?.actors || '';
        }

        filmItems.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
}
