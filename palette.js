var originalPalette = [
//   R    G    B
    [242, 167, 219],
    [241, 152, 196],
    [231, 121, 164],
    [206, 84,  116],
    [167, 48,  61 ],
    [91,  24,  20 ],
    [248, 213, 245],
    [235, 59,  131],
    [197, 42,  84 ],
    [166, 33,  47 ],
    [0,   0,   0  ]
];

var canvas = document.getElementById('kirbyCanvas');
ctx = canvas.getContext('2d');

var img = new Image();
img.src = "./kirby.png";

img.onload = function() {
    drawKirby();
}

function drawKirby() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    // Global array of original pixel values
    originalPixelArray = imageData.data;
}

function changeColor(oldIndex, newColor) {
    console.log(newColor);
    // Pixel array is four parts: R, G, B, alpha
    var length = originalPixelArray.length / 4;
    var newPixelArray = originalPixelArray;
    for (var i = 0; i < length; i++) {
        var index = 4 * i;

        var r = newPixelArray[index];
        var g = newPixelArray[index + 1];
        var b = newPixelArray[index + 2];

        if (r == originalPalette[oldIndex][0] && g == originalPalette[oldIndex][1] && b == originalPalette[oldIndex[2]]) {
            newPixelArray[index] = newColor[0];
            newPixelArray[index + 1] = newColor[1];
            newPixelArray[index + 2] = newColor[2];
        }
    }
    ctx.putImageData(imageData, 0, 0);
}
