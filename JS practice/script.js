const numberOfFilms = +prompt('скільки фільмів ви вже дивились?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('один з останніх фільмів', ''),
      b = prompt('на скільки оціните його?', ''),
      c = prompt('один з останніх фільмів', ''),
      d = prompt('на скільки оціните його?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log('personalMovieDB', personalMovieDB);