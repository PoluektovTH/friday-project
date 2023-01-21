const fs = require("fs");
const { EOL } = require("os");
const findIndexCub = require("./findIndexCub");
const level = process.argv[2] - 1; //пользователь задаёт уровень
/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */

const boardString = fs.readFileSync(`${__dirname}/puzzles.txt`, "utf-8");

function perebor(str) {
  str.map(el);
}

function solve(boardString) {
  const re = /\S{9}/g;
  let horizArr = boardString //получаем горизонтальные строки
    .split(EOL)
    .map((el) => [el])
    .map((el) => el.join().match(re));

  horizArr = horizArr[level].map((el) => el.split(""));

  let vertArr = horizArr.map((e) => (e = [e]));
  vertArr = horizArr[level].map((col, l) =>
    horizArr[level].map((row) => row[l])
  );

  let cube;
  let chars;

  const allNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let needNumber;
  let finalArr;
  let needVertarArr;

  for (let i = 0; i < horizArr.length; i++) {
    //замена тире на цифру
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

  for (let i = 0; i < horizArr.length; i++) {
    //замена тире на цифру
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

  for (let i = 0; i < horizArr.length; i++) {
    //замена тире на цифру
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

  for (let i = 0; i < horizArr.length; i++) {
    //замена тире на цифру
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

  for (let i = 0; i < horizArr.length; i++) {
    //замена тире на цифру
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

  for (let i = 0; i < horizArr.length; i++) {
    //замена тире на цифру
    for (let j = 0; j < horizArr.length; j++) {
      if (horizArr[i][j] === "-") {
        needVertarArr = horizArr.map((el, index) => el[j]);

        chars = findIndexCub(i, j);
        cube = chars.map((el) => horizArr[el[0]][el[1]]);
        finalArr = [...horizArr[i], ...needVertarArr, ...cube, ...allNumbers];

        needNumber = finalArr.filter(
          (el) => finalArr.indexOf(el) === finalArr.lastIndexOf(el)
        );

        horizArr[i].splice([j], 1, needNumber[1] || needNumber[0]);
      }
    }
  }

  return horizArr;
}


console.table(solve(boardString));
/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
453e45345345353;
