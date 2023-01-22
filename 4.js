/*
Buatlah sebuah function filterArr yang menerima 2 input arr (array) dan index (number). Function akan menghasilkan sebuah ARRAY BARU yang berisikan semua data di arr kecuali data yang berada di parameter index

contoh:
input: 
- arr: [1, 2, 3, 4, 5, 6]
- index: 3

output:
[1, 2, 3, 5, 6]

karena angka 4 berada di index ke 3, sehingga tidak dimasukkan ke dalam array baru
Nb: diasumsikan input selalu benar
*/

function filterArr(arr, index) {
    return arr.filter((val, i) => i !== index);
    }

console.log(filterArr([1, 2, 3, 4, 5, 6], 3)) // [1, 2, 3, 5, 6];
console.log(filterArr([4, 5, 2, 11, 34, 121 ,21], 4)) // [4, 5, 2, 11, 121, 21]
console.log(filterArr([3, 2, 1], 0)) // [2, 1]