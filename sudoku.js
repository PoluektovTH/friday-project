const fs = require('fs');
const { EOL } = require('os');

/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */

const boardString = fs.readFileSync(`${__dirname}/puzzles.txt`, 'utf-8');

function perebor(str) {
  str.map(el);
}

function solve(boardString) {
  const re = /\S{9}/g;
  const level = process.argv[2] - 1; //user enters level
  const horizArr = boardString // string from field
    .split(EOL)
    .map((el) => [el])
    .map((el) => el.join().match(re));
  const vertArr = horizArr[level] // columns to strings
    .map((col, i) => horizArr[level].map((row) => row[i]))
    .map((el) => el.join(''));
  return horizArr[level];
}

console.log(solve(boardString));
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

// let arr = ['6', '-', '8', '7', '3', '-', '-', '-', '-'];
// let mySet = new Set(arr);
// console.log(Array.from(mySet));
