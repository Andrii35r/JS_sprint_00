function hulkClosure() {
    const firstString = prompt("Enter first string:");
    const firstWords = firstString.split(' ');
    let secondWords = [];
    let thirdWords = [];

    if (firstWords.length === 2) {
        const secondString = prompt("Enter second string:");
        secondWords = secondString.split(' ');
        
        if (secondWords.length === 1) {
        }
    } 
    if (firstWords.length === 1) {
        const secondString = prompt("Enter second string:");
        secondWords = secondString.split(' ');
        
        if (secondWords.length === 1) {
            const thirdString = prompt("Enter third string:");
            thirdWords = thirdString.split(' ');
            
            if (thirdWords.length === 1) {
            }
        } 
    }

    const allWords = firstWords.concat(secondWords, thirdWords);
    if (allWords.length < 1 || allWords.length > 3) {
        return;
    }
    console.log(allWords.toString());
}

hulkClosure();