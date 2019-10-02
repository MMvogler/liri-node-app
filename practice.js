//Variable stores the import key.js file
var keys = require("./key");

var Spotify = require("node-spotify-api");

var axios = require("axios");

var bandsInTown = require('bandsintown');

var moment = require("moment");

var song = process.argv[2];


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



