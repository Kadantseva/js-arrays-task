// BEGIN
const flatten = (arr) => {
const res = [] 
    for (const element of arr) { 
        if (Array.isArray(element) === true) { 
            res.push(...element) 
        } 
        else { 
            res.push(element) 
        } 
    } 
  return res; 
};

export { flatten };
// END