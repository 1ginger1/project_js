"use strict"


//Практика 1
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt('Один из последних промотренных фильмов ?', ''),
      b = prompt('На сколько оцените фильм ?', ''),
      c = prompt('Один из последних промотренных фильмов ?', ''),
      d = prompt('На сколько оцените фильм ?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);



//Условия
const number = 101;
if (number > 100) {
    console.log('OK!');
} else if (number === 50) {
    console.log('ERROR');
} else {
    console.log('ERROR');
}

const int = 50; 
(int === 50) ? console.log('OK'): console.log('ERROR');

const num = 70;
switch (num) {
    case 49:
        console.log('ERROR');
        break;
    case 100:
        console.log('ERROR');
        break;
    case 50:
        console.log('OK!!!');
        break;
    default:
        console.log('Не в этот раз');
        break;
}



// циклы 

let result = '';
let lenght = 7;

for(let i = 1; i < lenght; i++) {
    for (let j = 0; j < i; j++) {
        result += '*';
    }
    result += '\n';
}

console.log(result);

first: for(let i = 0; i < 3; i++) {
    console.log(`1 level: ${i}`);
    for(let j = 0; j < 3; j++) {
        console.log(`2 level: ${j}`);
        for(let k = 0; k < 3; k++) {
            // if (k === 2) break first;
            console.log(`3 level: ${k}`);
        }
    }
}



