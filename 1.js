/*
Dur: 3 Min
Buatlah sebuah function pushArr yang akan menambahkan 1 data baru ke dalam array. Function memiliki 2 input arr (array), val (berbagai tipe data);

contoh:
input:
- arr: [1, 2, 3, 4, 5]
- val: "enam"

output:
[1, 2, 3, 4, 5, "enam"]
*/

function pushArr(arr, val) {
    arr.push(val)
    return arr
}

console.log(pushArr([1, 2, 3, 4, 5], "enam")); // [1, 2, 3, 4, 5, "enam"]
console.log(pushArr([4, 2, 12, 3, 7], [3, 2])) // [4, 2, 12, 3, 7, [3, 2]]