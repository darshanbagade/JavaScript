const marvelHeros = ["Ironman", "Spiderman", "Thor"];
const dcHeros = [ "superman", "flash", "batman"];


//inserting array into another array
// marvelHeros.push(dcHeros);

// console.log(marvelHeros);
// [ 'Ironman', 'Spiderman', 'Thor', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvelHeros[3][1]); //flash




//concatenating two arrays
// console.log(marvelHeros.concat(dcHeros));
//[ 'Ironman', 'Spiderman', 'Thor', 'superman', 'flash', 'batman' ]



//collecting array inside the array into single array
// const myNewArr = [ 1, 2, 3 , [ 4, 5, [ 6,7]], [8, 9] ];
// console.log(myNewArr);


//spread
// const all_new_heros = [...marvelHeros, ...dcHeros];
// console.log(all_new_heros);



//flat
// console.log(myNewArr.flat(Infinity)); // we can mention till which level we have to make flat



//checks array or not
// console.log(Array.isArray("darshan"));//false
// console.log(Array.isArray("darshan", "hitesh", "kunal "));//false
// console.log(Array.isArray(["darshan", "hitesh", "kunal "]));//true

//convert into the array
// console.log(Array.from("Darshan")); //['D', 'a', 'r', 's', 'h','a', 'n']


//console.log(Array.from({name: "hitesh"})) // interesting


let score1 = 70;
let score2 = 80;
let score3 = 90;

//array of given values
console.log(Array.of(score1,score2,score3));