var originalPalette = [
//   R    G    B
    [255, 162, 222],
    [255, 146, 198],
    [247, 113, 165],
    [222, 73,  115],
    [181, 32,  57 ],
    [99,  16,  16 ],
    [255, 211, 247],
    [235, 59,  131],
    [214, 0,   82 ],
    [181, 0,   41 ],
    [0,   0,   0  ]
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

        var r = newPixelArray[index];
        var g = newPixelArray[index + 1];
        var b = newPixelArray[index + 2];

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
