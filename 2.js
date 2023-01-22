/*
Buatlah sebuah function reverseArr yang menerima 1 input arr (array). Funtion ini akan menghasilkan sebuah array baru yang urutannya dibalik dari belakang ke depan

contoh:
input:
- arr: [1, 2, 3, 4, 5];

output:
[5, 4, 3, 2, 1]
*/

function reverseArr(arr) {
    let arr2 =[]
    for (let i = arr.length - 1; i >= 0; i--){
        arr2.push(arr[i])
    }
    return arr2
}

console.log(reverseArr([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
console.log(reverseArr(['h', 'e', 'l', 'l', 'o'])) // ['o', 'l', 'l', 'e', 'h']