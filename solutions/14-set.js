// BEGIN
const countUniqChars = (str) => {

    const unikalChars = new Set();
    
    for (let char of str) {
        unikalChars.add(char);
    }

    return unikalChars.size;
};

export default countUniqChars;
// END