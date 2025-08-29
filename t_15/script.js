let str = '    Giant Spiders?   What’s next? Giant Snakes?   ';

function removeDuplicates() {
    const trimmedStr = str.trim();
    const dividedStr = trimmedStr.split(' ');
    const seen = {};
    const result = [];

    for (const word of dividedStr) {
        if (word === '') {
            continue
        }

        if (!seen[word]) {
            seen[word] = true;
            result.push(word);
        }
        console.log(result)
        
    }

    return result.join(' ');
}

console.log(removeDuplicates()); 

str = '. . . . ? . . . . . . . . . . . ';

function removeDuplicates() {
    const trimmedStr = str.trim();
    const dividedStr = trimmedStr.split(' ');
    const seen = {};
    const result = [];

    for (const word of dividedStr) {
        if (word === '') {
            continue
        }

        if (!seen[word]) {
            seen[word] = true;
            result.push(word);
        }
        console.log(result)
        
    }

    return result.join(' ');
}

console.log(removeDuplicates()); 