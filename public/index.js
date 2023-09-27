const albumSelect = document.getElementById('albumSelect'); // The select element
let albumCover; // Set the Album Cover
let songList; // Song List Element
const jsmediatags = window.jsmediatags

window.onload = () => {
    console.log(localStorage.getItem('discordUser'))
    console.log(localStorage.getItem('discordID'))
}

window.addEventListener("DOMContentLoaded", () => {
    /*
      Set the Album Cover here because it
      doesnt like me setting it globally
    */
    albumCover = document.getElementById('albumCover');
    songList = document.getElementById('songList');
})

function setAlbum(album) {
    let albumSelected = album
    albumSelected = albumSelected.toLowerCase();
    albumSelected = albumSelected.replace(/\s/g, '');

    if (document.getElementById('songList').hasChildNodes()) {
        document.querySelectorAll('.song-button').forEach((remove) => {
            remove.remove()
        })
    }
    
    $.getJSON("/kanye/en_us.json?url", function (data) {
        let album = data[albumSelected]
        console.log(albumSelected)
        console.log(data[albumSelected])
        document.getElementById('albumTitle').innerHTML = data[albumSelected].title
        let songPaths = [];
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
    let songPlayer = document.getElementById('songPlayer')
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
    songPlayer.addEventListener('ended', function() {
        songPlayer.currentTime = 0;
        songPlayer.src = songPaths[songPaths.findIndex(_song)+=1]
        songPlayer.play()
    })
}