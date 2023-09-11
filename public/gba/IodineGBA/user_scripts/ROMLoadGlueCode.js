function attachBIOS(BIOS) {
    try {
        IodineGUI.Iodine.attachBIOS(new Uint8Array(BIOS));
    } catch (error) {
        IodineGUI.Iodine.attachBIOS(BIOS);
    }
}

function attachROM(ROM) {
    try {
        IodineGUI.Iodine.attachROM(new Uint8Array(ROM));
    } catch (error) {
        IodineGUI.Iodine.attachROM(ROM);
    }
}

function fileLoadShimCode(files, ROMHandler) {
    if (typeof files != "undefined") {
        if (files.length >= 1) {
            //Gecko 1.9.2+ (Standard Method)
            try {
                var binaryHandle = new FileReader();
                binaryHandle.onloadend = function() {
                    ROMHandler(this.result);
                }
                binaryHandle.readAsArrayBuffer(files[files.length - 1]);
            } catch (error) {
                try {
                    var result = files[files.length - 1].getAsBinary();
                    var resultConverted = [];
                    for (var index = 0; index < result.length; ++index) {
                        resultConverted[index] = result.charCodeAt(index) & 0xFF;
                    }
                    ROMHandler(resultConverted);
                } catch (error) {
                    alert("Could not load the processed ROM file!");
                }
            }
        }
    }
}

function fileLoadBIOS() {
    fileLoadShimCode(this.files, attachBIOS);
}

function fileLoadROM() {
    fileLoadShimCode(this.files, attachROM);
}

function downloadFile(fileName, registrationHandler) {
    var ajax = new XMLHttpRequest();
    ajax.onload = registrationHandler;
    ajax.open("GET", fileName, true);
    ajax.responseType = "arraybuffer";
    ajax.overrideMimeType("text/plain; charset=x-user-defined");
    ajax.send(null);
}

function processDownload(parentObj, attachHandler) {
    try {
        attachHandler(new Uint8Array(parentObj.response));
    } catch (error) {
        var data = parentObj.responseText;
        var length = data.length;
        var dataArray = [];
        for (var index = 0; index < length; index++) {
            dataArray[index] = data.charCodeAt(index) & 0xFF;
        }
        attachHandler(dataArray);
    }
}