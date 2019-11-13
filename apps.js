require("dotenv").config()


var SpotifyWebApi = require('node-spotify-api');
var axios = require("axios");
var ombd = require("omdb");


var spotify = new SpotifyWebApi({
    id: process.env.CLIENT_ID,
    secret: process.env.CLIENT_SECRET,

});
//  set ups array/aruments 
var command = process.argv[2];
var userInput = process.argv[3]; 

switch (command) {
    case "movie-this":
        console.log("this movie is about to be");
        break;
    case "concert-this":
        console.log("this concert is about to be");
        bandsInTown();
        break;
    case "spotify-this":
        console.log("this spotify is");
spotifyThis(userInput);
   
        
        break;
}
// function for spotify 
function spotifyThis(song){
    spotify.search({ type: 'track', query: song }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
    
        console.log(data.tracks.items[0]);
    
    });
}


function bandsInTown(bands) {
var url = "https://rest.bandsintown.com/artists/celine+dion/events?app_id=codingbootcamp"

axios.get(url)
.then(function(results){
    console.log(results.data);

})

ombd.get(url)
.then(function(results{
    console.log(results.data);
})

}



// console.log(spotifyApi);