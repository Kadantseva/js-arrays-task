// BEGIN
const getSameParity =  (arr) => {
    if (arr.length === 0) return arr;
    const result = [];
    const isEven = Math.abs(arr[0]) % 2 === 0;
    for (const element of arr) {
        if (isEven && Math.abs(element) % 2 === 0) {
            result.push(element);
            continue;
        }
       if (!isEven && Math.abs(element) % 2 !== 0) {
            result.push(element);
        }
    }

    return result;
}

export default getSameParity;
// END