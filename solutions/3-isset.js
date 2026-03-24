// BEGIN
const get = (arr, index, defaultValue = null) => {
    let result = defaultValue;
    if (index >= 0 && index < arr.length) {
       result = arr[index]; 
    } 

    return result;  
 
};

export { get };
// END