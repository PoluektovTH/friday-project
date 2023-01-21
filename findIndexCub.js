function findIndexCub(i, j) {
  const iCub = Math.floor(i / 3);
  const jCub = Math.floor(j / 3);

  let arr = [];

  for (let k = iCub * 3; k <= iCub * 3 + 2; k++) {
    for (let n = jCub * 3; n <= jCub * 3 + 2; n++) {
      arr.push([k, n]);
    }
  }

  return arr;
}

console.log(findIndexCub(0, 0));
