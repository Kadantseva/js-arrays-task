// BEGIN
const swap = (arr) => {
    let element = [ ]; 
    if (arr.length < 2) {
        return arr; 
    }
    
    let first = arr[0];
    let last = arr[arr.length - 1];
    arr[0] = last;
    arr[arr.length - 1] = first;
    return arr;     
};

export { swap };
// END