const isPalindrome = word => {
    let wordArr = word.toLowerCase().split('');
    let wordUpsideDownArr = [];
    for (let i=wordArr.length-1; i>=0; i--) {
        wordUpsideDownArr.push(wordArr[i])
    }
    console.log(wordArr)
    console.log(wordUpsideDownArr)

    let wordUpsideDown = wordUpsideDownArr.toString().replace(/,/g, '');
    console.log(wordUpsideDown)
    if (word == wordUpsideDown) {
        return true;
    } else {
        return false;
    }
}

const palindrome = word => {
    let invertedWord = word
                        .split('')
                        .reverse()
                        .join('')

    return word === invertedWord;
}

//console.log(isPalindrome('otto'))
console.log(palindrome('ottarnoo'))