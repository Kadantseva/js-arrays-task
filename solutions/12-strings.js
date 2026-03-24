// BEGIN
const makeCensored =  (text, stopWords) => {
    let arr = text.split(' '); 
    const newArr = [];   
    for (const word of arr) {
        stopWords.includes(word) ? newArr.push('$#%!') : newArr.push(word);
    }
    return newArr.join(' ');
};

export default makeCensored;
// END