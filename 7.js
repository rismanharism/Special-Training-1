/*
Buatlah sebuah function deepSum yang menerima 1 parameter arr (array multidimensi), function akan mengembalikan sebuah number yang merupakan hasil penjumlahan semua angka yang terdapat di array
*/

function deepSum(arr) {
  let total = 0;
  for(let i = 0; i < arr.length; i++) {
  for(let j = 0; j < arr[i].length; j++) {
  for(let k = 0; k < arr[i][j].length; k++) {
  total += arr[i][j][k];
  }
  }
  }
  return total;
  }

let data = [
    [
      [4, 5, 6],
      [9, 1, 2, 10],
      [9, 4, 3]
    ],
    [
      [4, 14, 31],
      [9, 10, 18, 12, 20],
      [1, 4, 90]
    ],
    [
      [2, 5, 10],
      [3, 4, 5],
      [2, 4, 5, 10]
    ]
]

console.log(deepSum(data)); // 316