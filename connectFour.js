
let gameboard = [
    [".", ".", "hi", ".", ".", ".", ".","."],
    [".", ".", ".", ".", ".", ".", ".","."],
    [".", ".", ".", ".", ".", ".", ".","."],
    [".", ".", ".", ".", ".", ".", ".","."],
    [".", ".", ".", ".", ".", ".", ".","."],
    [".", ".", ".", ".", ".", ".", ".","."],
    [".", ".", ".", ".", ".", ".", ".","."],
    [".", ".", ".", ".", ".", ".", ".","."],
];


let gameboardPrint = gameboard.length + gameboard[0].length;


if(gameboard[0][2] == "hi") {
document.getElementById("r1c1").style.backgroundColor = "red";
};


if(gameboard[0][3] == ".") {
document.getElementById("r1c7").style.backgroundColor = "blue";
};





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
