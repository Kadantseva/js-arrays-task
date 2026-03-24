// BEGIN
const calculateSum =  (arr) => {
    let result = 0;
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] % 3 === 0) {
            result = result + arr[i];
        }
    }
    return result;
};

export {calculateSum};
// END