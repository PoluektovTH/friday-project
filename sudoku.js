const fs = require("fs");
const { EOL } = require("os");

/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */

const boardString = fs.readFileSync(`${__dirname}/puzzles.txt`, "utf-8");

function solve(boardString) {
  const re = /\S{9}/g;
  return boardString
    .split(EOL)
    .map((el) => [el])
    .map((el) => el.join().match(re));
}

console.log(solve(boardString));

// console.log(solve(boardString));

// const a = solve(boardString);

// const re = /\S{9}/g;
// const reGorizont = a[0].join().match(re);

// console.log(reGorizont);

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
