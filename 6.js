/*
Buatlah sebuah filterNumberByParam yang menerima 2 parameter angka (array) dan param (string), Function akan menghasilkan 1 array baru yang sudah terfilter berdasarkan param yang dikirimkan

contoh
input:
- angka: [1, 2, 3, 4, 5, 6, 7, 8]
- param: 'genap'

ourput: 
[2, 4, 6, 8]

========
input:
- angka: [1, 2, 3, 4, 5, 6, 7, 8]
- param: 'ganjil'

ourput: 
[1, 3, 5, 7]
========
input:
- angka: [1, 2, 3, 4, 5, 6, 7, 8]
- param: 'test'

ourput: 
'param harus genap atau ganjil'
*/

function filterNumberByParam(angka, param) {
    if (param === 'genap') {
    return angka.filter(val => val % 2 === 0);
    } else if (param === 'ganjil') {
    return angka.filter(val => val % 2 !== 0);
    } else {
    return 'param harus genap atau ganjil';
    }
    }

console.log(filterNumberByParam([1, 32, 123, 12, 543, 544], 'ganjil')) // [1, 123, 543]
console.log(filterNumberByParam([43, 43, 32, 43, 43, 21, 22], 'genap')) // [32, 22]
console.log(filterNumberByParam([1, 2, 3], 'ganjul')) // 'param harus genap atau ganjil'