console.log('HULK SMASH PATRIARCHY!');

// $.ajax({
//   method: 'GET',
//   url: 'http://www.omdbapi.com/?s=batman'
// }).done(function(results) {
//   console.log(results);
// });
//
// $.get('http://www.omdbapi.com/?s=batman').done(function(results) {
//   console.log(results);
// });

var omdb = 'http://www.omdbapi.com/'

var ajaxCall = $.get(omdb + '?s=batman');

var promise = Promise.resolve(ajaxCall);

promise.then(function(movies) {

    var moviePromise = movies.Search.map(function(movie) {
    var url = omdb + '?i=' + movie.imdbID;
    var ajax = $.get(url);
    return Promise.resolve(ajax);
  })
return Promise.all(moviePromise);
}).then(function(singleMovie) {

  console.log(singleMovie);
}).catch(function(error) {
  console.log(error, '!!!');
});
