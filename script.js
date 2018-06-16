var originalPalette = [
//   R    G    B
    [0,   0,   0  ],
    [255, 211, 247],
    [255, 162, 222],
    [255, 146, 198],
    [247, 113, 165],
    [222, 73,  115],
    [181, 32,  57 ],
    [99,  16,  16 ],
    [255, 24,  132],
    [214, 0,   82 ],
    [181, 0,   41 ]
];

var presetPalletes = [
    ["000000","FFD3F7","FFA2DE","FF92C6","F771A5","DE4973","B52039","631010","FF1884","D60052","B50029"], // Pink
    ["000000","FFA2A5","FF0039","DE0029","B50818","B50818","6B0808","4A0000","FF00A5","DE006B","B50029"], // Red
    ["000000","ffeb00","ffb218","ff9a18","ff7921","ff5929","c64118","842810","ff4900","c63000","842810"], // Orange
    ["000000","fffb00","ffd300","ffb200","e7aa00","ad7900","846100","5a4900","ff1800","de1000","ad0000"], // Yellow
    ["000000","c6fb9c","7bfb29","73eb18","63d300","399a00","297900","105900","de7100","ce4900","8c3800"], // Green
    ["000000","ffd3f7","ff92de","ff92c6","f771a5","de4973","b52039","631010","18a25a","318252","296939"], // Cherry
    ["000000","bdfbde","73fbbd","39d394","00a26b","008263","006952","005139","ffa24a","de7921","bd5900"], // Emerald
    ["000000","a5fbff","8cdbff","6bbaff","529aff","2979ff","1061c6","29307b","6359ff","4a41de","3118b5"], // Ocean
    ["000000","b5cbff","7b9aef","6382de","5271ce","0051b5","00389c","00207b","5200bd","420094","39006b"], // Sapphire
    ["000000","cebaff","b59aff","a571ff","8c51ff","7308d6","63289c","4a206b","b54184","94206b","7b0052"], // Grape
    ["000000","d69a8c","d68263","bd6952","9c5142","843831","6b2821","521818","9c2018","841008","730000"], // Chocolate
    ["000000","fffbff","dedbde","bdbabd","9c9a9c","737173","525152","313031","7b797b","5a595a","424142"], // Chalk
    ["000000","fffbff","fffbff","dedbde","bdbabd","949294","737173","525152","ff4963","d62042","b50029"], // Snow
    ["000000","848284","737173","636163","525152","424142","393839","292829","ff9a08","ff7900","ce5100"], // Carbon
    ["000000","8c8a8c","848284","737173","636163","525152","424142","313031","525152","393839","292829"], // Shadow
    ["000000","efd6c6","efd6c6","cc9999","cc9999","996666","663333","393939","ff5050","cc3333","993333"], // Stone
    ["000000","48d0f8","90f0f8","48d0f8","00a0f8","5830f8","500030","303030","780088","680058","500030"], // Ice
    ["000000","f8f8f8","0000f8","0000f8","2000b0","2000b0","400058","400058","e80098","c00090","980078"], // Meta Knight
    ["a85048","e87880","f0e0e8","e8d0d0","f0a0b8","e87880","d07880","a87070","e85048","e02018","b01810"]  // KDL3
]


var canvas = document.getElementById('kirbyCanvas');
ctx = canvas.getContext('2d');
ctx.msImageSmoothingEnabled = false;
ctx.mozImageSmoothingEnabled = false;
ctx.webkitImageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false;

var img = new Image();
img.crossOrigin = "Anonymous";
img.src = "http://austinbricker.com/KCE/kirby.png";

img.onload = function() {
    drawKirby();
}

function drawKirby() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, img.width, img.height);
    imageData = ctx.getImageData(0, 0, img.width, img.height);
    ctx.drawImage(canvas, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height);

    // Global array of original pixel values
    originalPixelArray = Uint8ClampedArray.from(imageData.data)
}

function changeColor(oldIndex, newColor) {
    // Pixel array is four parts: R, G, B, A
    var length = originalPixelArray.length / 4;
    var newPixelArray = Uint8ClampedArray.from(imageData.data)
    for (var i = 0; i < length; i++) {
        var index = 4 * i;

        var r = originalPixelArray[index];
        var g = originalPixelArray[index + 1];
        var b = originalPixelArray[index + 2];

        if (r == originalPalette[oldIndex][0] && g == originalPalette[oldIndex][1] && b == originalPalette[oldIndex][2]) {
            newPixelArray[index] = newColor.rgb[0];
            newPixelArray[index + 1] = newColor.rgb[1];
            newPixelArray[index + 2] = newColor.rgb[2];
        }
    }
    imageData.data.set(newPixelArray)
    ctx.putImageData(imageData, 0, 0);
    ctx.drawImage(canvas, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height);
}

function readFile(evt) {
    var f = evt.target.files[0];
    if (!f) {
        alert("Failed to read file");
    }
    else if (f.name.split('.').pop() != 'gba') {
        alert(f.name + " is not a .gba file");
    }
    else if (f.size < 0x4bb13e) {
        alert(f.name + " is too small to be an Amazing Mirror ROM.")
    }
    else {
        var fr = new FileReader();
        fr.onload = function(e) {
            saveButton.disabled = false
            name = f.name.split('.')[0] + "_new.gba"
            var arrayBuffer = fr.result
            rom = new Uint8Array(arrayBuffer)
        }
        fr.readAsArrayBuffer(f);
    }
}

function rewriteColor() {
    var colors = document.getElementsByClassName('jscolor')
    for (var i = 0; i < colors.length; i++) {
        var hex = parseInt(colors[i].value, 16)
        var gba = rgb2gba(hex)
        var first = (gba >> 8) & 0xFF
        var second = gba & 0xFF

        rom[0x4bb12e + (2 * i)] = second
        rom[0x4bb12e + (2 * i) + 1] = first
    }
}

function writeFile(evt) {
    rewriteColor()
    var a = document.createElement("a")
    a.download = name
    var blob = new Blob([rom], {
        type: 'text/plain'
    })
    a.href = URL.createObjectURL(blob);
    document.body.appendChild(a)
    a.click()
    saveButton.disabled = true
    document.body.removeChild(a)
}

function setPreset() {
    var presetIdx = Number(document.getElementById('presets').value)
    var colors = document.getElementsByClassName('jscolor')
    for (var i = 0; i < colors.length; i++) {
        colors[i].jscolor.fromString(presetPalletes[presetIdx][i])
        changeColor(i, colors[i].jscolor)
    }
}

function rgb2gba(c) {
    var r = (c & 0xFF0000) >> 16
    var g = (c & 0x00FF00) >> 8
    var b = (c & 0x0000FF)

    var r15 = Math.round(r * 31 / 255)
    var g15 = Math.round(g * 31 / 255)
    var b15 = Math.round(b * 31 / 255)

    var result = (b15 << 10) | (g15 << 5) | (r15)
    return result
}

var name;
var rom;

var saveButton = document.getElementById('save')
saveButton.addEventListener('click', writeFile)

document.getElementById('fileinput').addEventListener('change', readFile, false)
