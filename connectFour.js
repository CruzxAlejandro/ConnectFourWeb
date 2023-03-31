
let gameboard = [
    [".", ".", ".", ".", ".", ".", ".","."],
    [".", ".", ".", ".", ".", ".", ".","."],
    [".", ".", ".", ".", ".", ".", ".","."],
    [".", ".", ".", ".", ".", ".", ".","."],
    [".", ".", ".", ".", ".", ".", ".","."],
    [".", ".", ".", ".", ".", ".", ".","."],
    [".", ".", ".", ".", ".", ".", ".","."],
    [".", ".", ".", ".", ".", ".", ".","."],
];


let gameboardPrint = gameboard.length + gameboard[0].length;



document.getElementById("gameboardMat").innerHTML = gameboardPrint;






// let arr = [];
// let rows = 8;
// let columns = 8;



// // creating two-dimensional array
// for (let i = 0; i < rows; i++) {
//   arr[i] = [];
//   for (let j = 0; j < columns; j++) {
//     arr[i][j] = j;
//   }
// }

// console.log(arr);
