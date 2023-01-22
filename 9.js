function getAnimals(arr) {
  let karnivora = '';
  let herbivora = '';
  let omnivora = '';
  for (let i = 0; i < arr.length; i++) {
    let animal = arr[i].split(':');
    let name = animal[0];
    let type = animal[1];
    if (type === 'K') {
      if (name.length > karnivora.length) {
        karnivora = name;
      }
    } else if (type === 'H') {
      if (name.length > herbivora.length) {
        herbivora = name;
      }
    } else if (type === 'O') {
      if (name.length > omnivora.length) {
        omnivora = name;
      }
    }
  }
  return [karnivora, herbivora, omnivora];
}


//Test Case 

console.log(getAnimals(['Singa:K', 'Kuda:H', 'Monyet:O']))
// [ 'Singa','Kuda','Monyet' ]

console.log(getAnimals(['Macan:K', 'Ayam:O', 'Gajah:H', 'Monyet:O', 'Kerbau:H', 'Musang:O', 'Burung:H', 'Hiu:K']))
// [ 'Macan', 'Kerbau', 'Monyet' ]

console.log(getAnimals(['Tikus:O', 'Merpati:H', 'Beruang:O', 'Elang:K', 'Perkutut:H', 'Harimau:K']))
  // [ 'Harimau', 'Perkutut', 'Beruang' ]