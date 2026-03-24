// BEGIN
const calculateAverage =  (arr) => {
 if (arr.length === 0) {
   return null;
 };
 
 let result = 0;
 
 for (const number of arr) {
   result += number;
 }
 
 return result / arr.length;
 
};

export default calculateAverage;
// END