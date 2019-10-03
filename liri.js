// require("dotenv").config();
// require("moment").config();

//Variable stores the import key.js file
var keys = require("./key");

var Spotify = require("node-spotify-api");

var axios = require("axios");

var bandsInTown = require('bandsintown');

var moment = require("moment");

var omdb = require('omdb');

// ___________________________________________________________________
// This is the "concert-this" section

// Taking in the command line arguments by first getting all the elements
// Change array to three instead of 2
var artist = process.argv[2];

axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
  function(response) {

    console.log(response.data[0].venue.name);
    console.log(response.data[0].venue.city);
    console.log(response.data[0].venue.region);
    console.log(response.data[0].datetime);
    
  }
);

// ___________________________________________________________________
//  This is the "spotify-this-song" section

//Access keys information for Spotify API
function mySpotify() {

  var spotify = new Spotify({
    id: keys.spotify.id,
    secret: keys.spotify.secret});

    spotify.search({ type: 'track', query: song }, function(err, data) {
      
      if (err) {
          return console.log(err);
        }
        
      
      console.log(data);
      // console.log(data.body.name);
    })
  
};
mySpotify();

// var axiosWithSpotify = axios(spotifyReq);

;
// _____________________________________________________________________
// This is the "movie-this"section

var movie = process.argv[2];

var movieUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

// console.log(movieUrl);

axios.get(movieUrl).then(
  function(response) {
  
    console.log(response.data.Title);  
    console.log(response.data.imdbRating);
    console.log(response.data.tomatoRating);
    console.log(response.data.Country);
    console.log(response.data.Language);
    console.log(response.data.Plot);
    console.log(response.data.Actors);

  });

// ________________________________________________________________
// This is the "do-what-it-says" section 




