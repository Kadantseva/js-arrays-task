// BEGIN
const addPrefix = (arr, pre) => {

    const result =  [];
    for  (let i = 0; i < arr.length; i ++ ) {
       result[i] = `${pre} ${arr[i]}`; 
    }
    return result;  
 
};

export default addPrefix;
// END