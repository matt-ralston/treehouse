var playlist = new Playlist();

var hereComesTheSun = new Song("Here Comes the Sun", "The Beatles", "2:54");
var walkingOnSunshine = new Song("Walking on Sunshine", "Katrina and the Waves", "3:11");

playlist.add(hereComesTheSun);
playlist.add(walkingOnSunshine);

var playlistElement = document.getElementById("playlist");

playlist.renderInElement(playlistElement);
