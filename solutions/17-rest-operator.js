// BEGIN
const getMax = (massiv) => {

    if (massiv.length === 0) {
        return null;
    } 
    
    const [first, ...rest] = massiv;
    let max = first;
    
    for (const number of rest) {
        if (number > max) {
            max = number;
        }
    }
    
    return max;
         
};

export { getMax };
// END