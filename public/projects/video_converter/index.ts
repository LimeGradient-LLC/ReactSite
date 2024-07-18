var audioContext = new window.AudioContext();
var reader = new FileReader();
var buffer;

const sampleRate = 44100;
const numberOfChannels = 1;

const newRenderedBuffer = {
    buffer: null,

    get getBuffer() {return this.buffer},
    set setBuffer(buf) {this.buffer = buf},
}

document.getElementById('fileUploadForm').onchange = function () {
    reader.onload = function () {
        var videoFileAsBuffer = reader.result; // arraybuffer
        audioContext.decodeAudioData(videoFileAsBuffer).then(function (decodedAudioData) {

            var duration = decodedAudioData.duration;

            var offlineAudioContext = new OfflineAudioContext(numberOfChannels, sampleRate * duration, sampleRate);
            var soundSource = offlineAudioContext.createBufferSource();

            buffer = decodedAudioData;
            soundSource.buffer = buffer;
            soundSource.connect(offlineAudioContext.destination);
            soundSource.start();

            offlineAudioContext.startRendering().then(function (renderedBuffer) {
                console.log(renderedBuffer); // outputs audiobuffer

                newRenderedBuffer.setBuffer = renderedBuffer;
            }).catch(function (err) {
                console.log('Rendering failed: ' + err);
            });
        });
    };

    reader.readAsArrayBuffer(this.files[0]); // video file
}

function convert() {
    

    /* audioEncoder(newRenderedBuffer.getBuffer, fileType, null, function onComplete(blob) {
        saveAs(blob, "sound.mp3");
    }) */
}