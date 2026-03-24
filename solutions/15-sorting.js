// BEGIN
const bubbleSort = (massiv) => {
  let sw;

  do {
    sw = false;
    for (let i = 0; i < massiv.length - 1; i++) {
      if (massiv[i] > massiv[i + 1]) {
        let temp = massiv[i];
        massiv[i] = massiv[i + 1];
        massiv[i + 1] = temp;
        sw = true;
      }
    }
  } while (sw);

  return massiv;
};

export default bubbleSort;
// END