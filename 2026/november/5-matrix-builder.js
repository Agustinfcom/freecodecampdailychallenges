/*
Matrix Builder

Given two integers (a number of rows and a number of columns), return a matrix (an array of arrays) filled with zeros (0) of the given size.

For example, given 2 and 3, return:

[
  [0, 0, 0],
  [0, 0, 0]
]
*/
function buildMatrix(rows, cols) {
  let matrix = []
  for (let x = 0; x<rows; x++){
    matrix.push([])
    for (let y = 0; y<cols; y++){
      matrix[x][y] = 0
    }
  }
  return matrix;
  //return Array.from({ length: rows }, () => Array(cols).fill(0));
}