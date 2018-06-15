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
    else {
        var fr = new FileReader();
        fr.onload = function(e) {
            colorButton.disabled = false
            name = f.name.split('.')[0] + "_new.gba"
            var arrayBuffer = fr.result
            rom = new Uint8Array(arrayBuffer)
        }
        fr.readAsArrayBuffer(f);
    }
}

function rewriteColor(evt) {
    saveButton.disabled = false
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
    var a = document.createElement("a")
    a.download = name
    var blob = new Blob([rom], {
        type: 'text/plain'
    })
    a.href = URL.createObjectURL(blob);
    document.body.appendChild(a)
    a.click()
    colorButton.disabled = true
    saveButton.disabled = true
    document.body.removeChild(a)
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

var colorButton = document.getElementById('color')
colorButton.addEventListener('click', rewriteColor)

document.getElementById('fileinput').addEventListener('change', readFile, false)
