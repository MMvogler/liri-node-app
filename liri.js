// require("dotenv").config();
// require("moment").config();

//Variable stores the import key.js file
var keys = require("./key");

var Spotify = require("node-spotify-api");

var axios = require("axios");

var bandsInTown = require('bandsintown');

var moment = require("moment");

var omdb = require('omdb');

// Taking in one of the four commands in command line 
var command = process.argv[2];

switch(command) {
  case "concert-this":
    concertThis()
    break;
  case "spotify-this-song":
    mySpotify()
    break;
  case "movie-this":
    moviethis()
    break;
  default:
    // code block
}

// ___________________________________________________________________
// This is the "concert-this" section

function concertThis() {
  // Taking in the user's band or musician from command line 
  var artist = process.argv[3];

  axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
    function(response) {

      console.log("venue name: ", response.data[0].venue.name);
      console.log("location: ", response.data[0].venue.city);
      console.log(response.data[0].venue.region);
      console.log("date: ", response.data[0].datetime);
      
    }
)};

// ___________________________________________________________________
//  This is the "spotify-this-song" section

//Access keys information for Spotify API

// console.log("outside",song)
function mySpotify() {
  // Taking in the user's band or musician from command line 
  var song = process.argv[3];
  console.log("inside",song)

  var spotify = new Spotify({
    id: keys.spotify.id,
    secret: keys.spotify.secret});

    spotify.search({ type: 'track', query: song }, function(err, data) {
      
      if (err) {
          return console.log(err);
        }
        
      
      // console.log(JSON.stringify(data.tracks.items[0], null, 10));
      console.log("artist's name: ",JSON.stringify(data.tracks.items[0].artists[0].name, null, 10))//artist(s)
      console.log("song's title: ",data.tracks.items[0].name)//songs name
      console.log(`preview link: ${data.tracks.items[0].external_urls.spotify}`)//preview link
      // console.log(JSON.stringify(data.tracks.items[0], null, 10));
      console.log(`song's title: ${data.tracks.items[0].album.name}`)//album
      // console.log(data.body.name);
    })
  
};
// mySpotify();

// var axiosWithSpotify = axios(spotifyReq);

// _____________________________________________________________________
// This is the "movie-this"section
function moviethis() {
var movie = process.argv[3];

var movieUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

// console.log(movieUrl);

axios.get(movieUrl).then(
  function(response) {
  
    console.log("Title: ", response.data.Title);  
    console.log("IMDB Rating: ",response.data.imdbRating);
    console.log("Rotten Tomatoes Rating: ",response.data.tomatoRating);
    console.log("Country: ",response.data.Country);
    console.log("Language: ",response.data.Language);
    console.log("Plot: ",response.data.Plot);
    console.log("Actors: ",response.data.Actors);

  });
}
// ________________________________________________________________
// This is the "do-what-it-says" section 

// function doWhatItSays() {
//   var doWhat = process.argv[3];

//   var pullInfo = 
// };


