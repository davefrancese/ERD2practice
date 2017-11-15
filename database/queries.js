const db = require('./connection')

function getMovies() {
  return db('movies').select()
  .join('people', 'movies.director_id', 'people.id')
}

function getAllActorData() {
  return db('movies').select()
  .join('people_movies', 'people_movies.movie_id', 'movies.id').innerJoin('people', 'people.id', 'people_movies.people_id')
}

function joinData(dData, aData) {
  let movieArr = [];
  let movieObj = new Object();
  for (var i = 0; i < aData.length; i++) {
    let movieId = aData[i]["movie_id"]
    for (var j = 0; j < dData.length; j++) {
      if (aData[i].title === dData[j].title) {
        movieObj[movieId] = new Object();
        movieObj[movieId].title = aData[i].title;
        movieObj[movieId].director = dData[j].name;
        movieObj[movieId].actors = [];
        movieArr.push(movieObj)
      }
    }
  }
  for (var i = 0; i < aData.length; i++) {
    let movieId = aData[i]["movie_id"]
    for (var j = 0; j < movieArr.length; j++) {
      if (aData[i].title === movieArr[j][movieId].title) {
        if (movieObj[movieId].actors.indexOf(' ' + aData[i].name) === -1) {
          movieObj[movieId].actors.push(' ' + aData[i].name)
        }
      }
    }
  }
  return movieArr[0];
}

module.exports = {
  getMovies,
  getAllActorData,
  joinData
}
