/*
Buatlah sebuah function highestLowest untuk mendapatkan angka terbesar dan terkecil dari sebuah array multidimensi
*/

function highestLowest(arr) {
  let flatArr = arr.flat(Infinity);
  let highest = Math.max(...flatArr);
  let lowest = Math.min(...flatArr);
  return [lowest, highest];
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

console.log(highestLowest(data)); // [1, 90] => 1 yang terkecil dan 90 yang terbesar