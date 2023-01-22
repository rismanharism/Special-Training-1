function filterMovie(genres) {
    let movies = [
      ["Drama", "Boyhood", "The Last of the Mohicans", "The Goldfinch"],
      ["Action", "Mad Max", "The Batman", "Josh Wick"],
      ["Fantasy", "The Fall", "The Forbidden Kingdom", "Ladyhawke", "Sea Beast"],
      ["Comedy", "Safety Last", "The Trip"]
    ];
    let result = [];
    for(let i = 0; i < genres.length; i++){
      for(let j = 0; j < movies.length; j++){
        if(genres[i] === movies[j][0]){
          result.push(movies[j])
        }
      }
    }
    return result.length > 0 ? result : []
  }
  
  function usersCanWatch(users) {
    if(!users || typeof users !== 'object') return 'Invalid Data!';
    let { name, cinema, menu } = users;
    let genres = menu.split(";");
    let result = filterMovie(genres);
    return result.length > 0 ? result : "Movie not found"
  }
  

// TEST CASE
const user1 = {
    name: "Bari",
    cinema: "XIV",
    menu: "Action;Drama;Comedy"
};
console.log(usersCanWatch(user1));
/*
[
  ["Action", "Mad Max", "The Batman", "Josh Wick"],
  ["Drama", "Boyhood", "The Last of the Mohicans", "The Goldfinch"],
  ["Comedy", "Safety Last", "The Trip"]
]
*/

const user2 = {
    name: "Tole",
    cinema: "XIIX",
    menu: "Fantasy;Adventure;Comedy"
};
console.log(usersCanWatch(user2));
/*
[
  ["Fantasy", "The Fall", "The Forbidden Kingdom", "Ladyhawke", "Sea Beast"],
  ["Comedy", "Safety Last", "The Trip"]
]
*/

const user3 = {
    name: "Rizky",
    cinema: "Cinepolos",
    menu: "Scifi-Musical"
};
console.log(usersCanWatch(user3));
// "Movie not found"

console.log(usersCanWatch());
// "Invalid Data!"