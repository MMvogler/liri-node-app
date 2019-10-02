var keys = require("./key");

var Spotify = require("node-spotify-api");

var axios = require("axios");

var omdb = require('omdb');

var bandsInTown = require('bandsintown');

var artist = process.argv[2];

axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
  function(response) {
    console.log(response.data[0].venue.name);
  }
)


