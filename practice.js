//Variable stores the import key.js file
var keys = require("./key");

var Spotify = require("node-spotify-api");

var axios = require("axios");

var bandsInTown = require('bandsintown');

var moment = require("moment");


var omdb = require('omdb');

var song = process.argv[2];


var movie = process.argv[2];

var movieUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

// console.log(movieUrl);

axios.get(movieUrl).then(
  function(response) {
    // console.log(response.data);
    console.log(response.data.Title);  
    console.log(response.data.imdbRating);
    console.log(response.data.tomatoRating);
    console.log(response.data.Country);
    console.log(response.data.Language);
    console.log(response.data.Plot);
    console.log(response.data.Actors);

  });



