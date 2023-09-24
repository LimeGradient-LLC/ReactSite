import kanyeData from "/kanye/en_us.json?url"

const albumCover = document.getElementById('albumCover');
const albumSelect = document.getElementById('albumSelect');

function setAlbum() {
    let album = albumSelect.options[albumSelect.selectedIndex].text;
    for (var key in kanyeData) {
        if (kanyeData.hasOwnProperty(key)) {
            console.log(key + " -> " + p[key]);
        }
    }
}