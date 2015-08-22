var playlist = new Playlist();

var hereComesTheSun = new Song("Here Comes the Sun", "The Beatles", "2:54");
var walkingOnSunshine = new Song("Walking on Sunshine", "Katrina and the Waves", "3:11");
var vodkaAndSoda = new Song("Vodka and Soda", "Miles Ralston", "4:15");
var aceVentura = new Movie("Ace Ventura", 2001, "2:10:00");

playlist.add(hereComesTheSun);
playlist.add(walkingOnSunshine);
playlist.add(vodkaAndSoda);
playlist.add(aceVentura);


var playlistElement = document.getElementById("playlist");

playlist.renderInElement(playlistElement);

var playButton = document.getElementById("play");
playButton.onclick = function() {
  playlist.play();
  playlist.renderInElement(playlistElement);
}

var nextButton = document.getElementById("next");
nextButton.onclick = function() {
  playlist.next();
  playlist.renderInElement(playlistElement);
}

var stopButton = document.getElementById("stop");
stopButton.onclick = function() {
  playlist.stop();
  playlist.renderInElement(playlistElement);
}
