function addWords(obj, wrds) {
    obj = {
        words: 'newspapers newspapers books magazines',
    }
    wrds = obj.words.split(' ');
    wrds.splice(4, 0, 'radio');
    wrds.splice(0, 1);

    console.log(wrds);
    
}
addWords();

function removeWords(obj, wrds) {
    obj = {
        words: 'newspapers books magazines radio',
    }
    wrds = obj.words.split(' ');
    wrds.splice(0, 1);
    wrds.splice(2, 3);

    console.log(wrds);
    
}
removeWords();

function changeWords(obj, wrds) {
    obj = {
        words: 'newspapers books magazines radio',
    }
    wrds = obj.words.split(' ');
    wrds.splice(-3);
    wrds.splice(0, 1, 'tv internet');

    console.log(wrds);
    
}
changeWords();