const recursion = (Array) => {
  for (let i = 0; i < horizArr.length; i++) {
    //замена тире на цифру;
    let count;
    for (let j = 0; j < horizArr.length; j++) {
      if (horizArr[i][j] === "-") {
        needVertarArr = horizArr.map((el, index) => el[j]);

        chars = findIndexCub(i, j);
        cube = chars.map((el) => horizArr[el[0]][el[1]]);
        finalArr = [...horizArr[i], ...needVertarArr, ...cube, ...allNumbers];

        needNumber = finalArr.filter(
          (el) => finalArr.indexOf(el) === finalArr.lastIndexOf(el)
        );
        if (needNumber.length === 1) {
          horizArr[i].splice([j], 1, needNumber[0]);
        }
      }
    }
  }
  return horizArr;
};
