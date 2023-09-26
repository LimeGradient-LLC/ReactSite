const albumSelect = document.getElementById('albumSelect'); // The select element
let albumCover; // Set the Album Cover
let songList; // Song List Element
let audioPlayerButtons;
let songPlayer;
const jsmediatags = window.jsmediatags

window.onload = () => {
    const urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams.get('discord'))
}

window.addEventListener("DOMContentLoaded", () => {
    /*
      Set the Album Cover here because it
      doesnt like me setting it globally
    */
    albumCover = document.getElementById('albumCover');
    songList = document.getElementById('songList');
    audioPlayerButtons = document.querySelector(".audioPlayerButtonHolder");
    audioPlayerButtons.style.visibility = 'hidden';
    songPlayer = document.getElementById('songPlayer')
})

function setAlbum() {
    var unknownMetadata = false;
    let albumSelected = document.getElementById('albumSelect').options[document.getElementById('albumSelect').selectedIndex].text; // Get selected value (make this line smaller dumbass)
    albumSelected = albumSelected.toLowerCase();
    albumSelected = albumSelected.replace(/\s/g, '');

    $.getJSON("/kanye/en_us.json?url", function (data) {
        let album = data[albumSelected]
        console.log(albumSelected)
        console.log(data[albumSelected])
        let songPaths = [];
        albumCover.src = album.coverUrl;
        for (var prop in album.songs) {
            var song = album.songs[prop]
            songPaths.push(song)
            songPaths.sort()
            console.log(songPaths)
        }


        for (var i in songPaths) {
            console.log(songPaths[i])
            let songButton = songList.appendChild(document.createElement('button'))
            songButton.className = 'song-button'
            jsmediatags.read(window.location.href + songPaths[i], {
                onSuccess: function (tag) {
                    songButton.innerHTML = tag.tags.title;
                }
            })
            songButton.setAttribute("onClick", "playSong('" + songPaths[i] + "')")
        }
    });
}

function playSong(_song) {
    jsmediatags.read(window.location.href + _song, {
        onSuccess: function (tag) {
            navigator.mediaSession.metadata = new MediaMetadata({
                title: tag.tags.title,
                artist: tag.tags.artist,
                album: tag.tags.album,
                artwork: [{ src: albumCover.src }]
            })
        }
    })
    songPlayer.src = _song
    songPlayer.play();
    audioPlayerButtons.style.visibility = 'visible';
} 