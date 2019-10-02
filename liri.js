// require("dotenv").config();
// require("moment").config();

//Variable stores the import key.js file
var keys = require("./key");

var Spotify = require("node-spotify-api");

var axios = require("axios");

var omdb = require('omdb');

var bandsInTown = require('bandsintown');

// var moment = require("moments").config();

// var spotifyReq = require('node-spotify-api');

// ___________________________________________________________________
// This is the "concert-this" section

// Change array to three instead of 2
var artist = process.argv[2];

axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
  function(response) {
    console.log(response.data[0].venue.name);
  }
)

// axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
//   function(response) {
//     // console.log(response.data.getArtistEventList);
//   }
// )

// // Runs request through Axios to Bands in Town  
// var venueUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

// console.log(venueUrl);

// var nodeAxios = axios(venueUrl);

// Taking in the command line arguments by first getting all the elements
var artist = process.argv.slice(2).join(" ");

// nodeAxios.bandsintown(EventData, function(err, data) {
//   // console.log(JSON.stringify(data[0], null, 2));

//   var artist = data[0];
// })

// axios.get(venueUrl).then(
//   function(response) {
//     // console.log(response.data.EventData);
//   });

// ___________________________________________________________________
//  This is the "spotify-this-song" section

//Access keys information for Spotify API
function mySpotify() {
  var spotify = new Spotify({
    id: keys.spotify.id,
    secret: keys.spotify.secret});

    spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
      if (err) {
        
        
      }
      console.log(data);
    })
  
}
mySpotify();

// var axiosWithSpotify = axios(spotifyReq);

;
// _____________________________________________________________________
// This is the "movie-this"section


 
// omdb.search('saw', function(err, movies) {
//     if(err) {
//         return console.error(err);
//     }
 
//     if(movies.length < 1) {
//         return console.log('No movies were found!');
//     }
 
//     movies.forEach(function(movie) {
//         console.log('%s (%d)', movie.title, movie.year);
//     });
 
//     // Saw (2004)
//     // Saw II (2005)
//     // Saw III (2006)
//     // Saw IV (2007)
//     // ...
// });

 
// omdb.search('saw', function(err, movies) {
//     if(err) {
//         return console.error(err);
//     }
 
//     if(movies.length < 1) {
//         return console.log('No movies were found!');
//     }
 
//     movies.forEach(function(movie) {
//         console.log('%s (%d)', movie.title, movie.year);
//     });
 
//     // Saw (2004)
//     // Saw II (2005)
//     // Saw III (2006)
//     // Saw IV (2007)
//     // ...
// });
 
// omdb.get({ title: 'Saw', year: 2004 }, true, function(err, movie) {
//     if(err) {
//         return console.error(err);
//     }
 
//     if(!movie) {
//         return console.log('Movie not found!');
//     }
 
//     console.log('%s (%d) %d/10', movie.title, movie.year, movie.imdb.rating);
//     console.log(movie.plot);

// var nodeArgs = process.argv;

// // Create an empty variable for holding the movie name
// var movieName = "";

// // Looping through node argument
// for (var i=2; i < nodeArgs.length; i++) {

//   if (i > 2 && i < nodeArgs.length) {
//     movieName = movieName + "+" + nodeArgs[i];
//   } else { 
//   movieName += nodeArgs[i];
//   }
// }

// //Access keys information for OMDB
// movieUrl = new axios(keys.omdb);

// console.log(movieUrl);

// axios.get(movieUrl).then(
//   function(response) {

//   }
// )
// ________________________________________________________________
// This is the "do-what-it-says" section 




