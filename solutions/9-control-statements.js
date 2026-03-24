// BEGIN
const getTotalAmount =  (many, current) => {
    let result = 0;
    
    for (let i = 0; i < many.length; i ++) {
        if (many[i].slice(0, 3) === current) {
            result = result + Number(many[i].slice(4));
        }
        result = result + 0;
    }

    return result;
}

export default getTotalAmount;
// END