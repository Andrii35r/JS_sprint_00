function countSimpleBrackets(str) {
    if (str.includes("NaN")) {
        return -1;
    }

    const stack = [];
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            stack.push(i);
        } else if (str[i] === ')') {
            if (stack.length === 0) {
                count++; 
            }

            const openIndex = stack.pop();
            const substring = str.slice(openIndex + 1, i);

            if (!substring.includes('(') && !substring.includes(')')) {
            }
        }
    }

    if (stack.length > 0) {
        count++; 
    }

    return count;
}
const testString = '()';  
const simplePairs = countSimpleBrackets(testString);
console.log(testString);  
console.log(simplePairs);  
  
function checkBrackets() {  
    let firstBracket = "()(()(()((()(())(()()))";  
    let splitBracket = firstBracket.split('');  
    let sum = 0;  
    let index = 0;  
    for (let i in splitBracket) {  
        if (splitBracket[i] === '(') {  
            index = i;  
            for (let j in splitBracket) {  
                if (splitBracket[j] === ')' && i < j) {  
                    sum++;  
                    splitBracket.splice(j, 1);  
                    break  
                }  
                  
            }  
        }  
    }  
  
    console.log(sum);  
    return;  
}  
  
  
checkBrackets();  
