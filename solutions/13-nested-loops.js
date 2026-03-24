const _ = require("lodash"); 

// BEGIN
const getSameCount = (array_1, array_2) => {

  let counter = 0;
  let temporary1 = _.uniq(array_1);
  let temporary2 = _.uniq(array_2);

  for (let i of temporary1) {
    for (let j of temporary2) {
      if (i === j) counter = counter + 1;
    }
  }

  return counter;
};

export default getSameCount;
// END