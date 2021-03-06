// These are the original colors for the Kirby sprite images
var originalPalettes = [
    ["000000", "ffd3f7", "ffa2de", "ff92c6", "f771a5", "de4973", "b52039", "631010", "ff1884", "d60052", "b50029"], // KNDL and KAM
    ["000000", "f8f8f8", "f8a0e8", "f070e0", "e040d0", "c010b0", "700058", "c00000", "f81020", "303030"] // KSS
]

// The current colors for each of the games
var gamePalettes = [
    ["000000", "ffd3f7", "ffa2de", "ff92c6", "f771a5", "de4973", "b52039", "631010", "ff1884", "d60052", "b50029"], // KNDL
    ["000000", "ffd3f7", "ffa2de", "ff92c6", "f771a5", "de4973", "b52039", "631010", "ff1884", "d60052", "b50029"], // KAM P1
    ["000000", "fffb00", "ffd300", "ffb200", "e7aa00", "ad7900", "846100", "5a4900", "ff1800", "de1000", "ad0000"], // KAM P2
    ["000000", "FFA2A5", "FF0039", "DE0029", "B50818", "B50818", "6B0808", "4A0000", "FF00A5", "DE006B", "B50029"], // KAM P3
    ["000000", "c6fb9c", "7bfb29", "73eb18", "63d300", "399a00", "297900", "105900", "de7100", "ce4900", "8c3800"], // KAM P4
    ["000000", "f8f8f8", "f8a0e8", "f070e0", "e040d0", "c010b0", "700058", "c00000", "f81020", "303030"] // KSS
]

// Table of preset color palettes
var presetPalettes = [
    ["000000", "FFD3F7", "FFA2DE", "FF92C6", "F771A5", "DE4973", "B52039", "631010", "FF1884", "D60052", "B50029"], // Pink
    ["000000", "FFA2A5", "FF0039", "DE0029", "B50818", "B50818", "6B0808", "4A0000", "FF00A5", "DE006B", "B50029"], // Red
    ["000000", "ffeb00", "ffb218", "ff9a18", "ff7921", "ff5929", "c64118", "842810", "ff4900", "c63000", "842810"], // Orange
    ["000000", "fffb00", "ffd300", "ffb200", "e7aa00", "ad7900", "846100", "5a4900", "ff1800", "de1000", "ad0000"], // Yellow
    ["000000", "c6fb9c", "7bfb29", "73eb18", "63d300", "399a00", "297900", "105900", "de7100", "ce4900", "8c3800"], // Green
    ["000000", "ffd3f7", "ff92de", "ff92c6", "f771a5", "de4973", "b52039", "631010", "18a25a", "318252", "296939"], // Cherry
    ["000000", "bdfbde", "73fbbd", "39d394", "00a26b", "008263", "006952", "005139", "ffa24a", "de7921", "bd5900"], // Emerald
    ["000000", "a5fbff", "8cdbff", "6bbaff", "529aff", "2979ff", "1061c6", "29307b", "6359ff", "4a41de", "3118b5"], // Ocean
    ["000000", "b5cbff", "7b9aef", "6382de", "5271ce", "0051b5", "00389c", "00207b", "5200bd", "420094", "39006b"], // Sapphire
    ["000000", "cebaff", "b59aff", "a571ff", "8c51ff", "7308d6", "63289c", "4a206b", "b54184", "94206b", "7b0052"], // Grape
    ["000000", "d69a8c", "d68263", "bd6952", "9c5142", "843831", "6b2821", "521818", "9c2018", "841008", "730000"], // Chocolate
    ["000000", "fffbff", "dedbde", "bdbabd", "9c9a9c", "737173", "525152", "313031", "7b797b", "5a595a", "424142"], // Chalk
    ["000000", "fffbff", "fffbff", "dedbde", "bdbabd", "949294", "737173", "525152", "ff4963", "d62042", "b50029"], // Snow
    ["000000", "848284", "737173", "636163", "525152", "424142", "393839", "292829", "ff9a08", "ff7900", "ce5100"], // Carbon
    ["000000", "8c8a8c", "848284", "737173", "636163", "525152", "424142", "313031", "525152", "393839", "292829"], // Shadow
    ["000000", "efd6c6", "efd6c6", "cc9999", "cc9999", "996666", "663333", "393939", "ff5050", "cc3333", "993333"], // Stone
    ["000000", "48d0f8", "90f0f8", "48d0f8", "00a0f8", "5830f8", "500030", "303030", "780088", "680058", "500030"], // Ice
    ["000000", "f8f8f8", "0000f8", "0000f8", "2000b0", "2000b0", "400058", "400058", "e80098", "c00090", "980078"], // Meta Knight
    ["a85048", "e87880", "f0e0e8", "e8d0d0", "f0a0b8", "e87880", "d07880", "a87070", "e85048", "e02018", "b01810"]  // KDL3
]

// The names of each color, for the drop down menus
colorNames = [
    "Pink",
    "Red",
    "Orange",
    "Yellow",
    "Green",
    "Cherry",
    "Emerald",
    "Ocean",
    "Sapphire",
    "Grape",
    "Chocolate",
    "Chalk",
    "Snow",
    "Carbon",
    "Shadow",
    "Stone",
    "Ice",
    "Meta Knight",
    "KDL3",
]

// Memory locations of Kirby's palette in each game
kamMemLocationsP1 = [0x4bb12e]
kamMemLocationsP2 = [0x4bb1ae]
kamMemLocationsP3 = [0x4bb1ce]
kamMemLocationsP4 = [0x4bb1ee]
kamMemLocations = [kamMemLocationsP1, kamMemLocationsP2, kamMemLocationsP3, kamMemLocationsP4]

kssMemLocations = [0x467d6, 0x46c36, 0x47116, 0x47156, 0x47176, 0x47196, 0x47236, 0x47276, 0x472b6, 0x472f6,
    0x47336, 0x47376, 0x473b6, 0x473f6, 0x47436, 0x47476, 0x474b6, 0x474f6, 0x47536, 0x47576,
    0x47a16, 0x485f6, 0xfa196]

kndlMemLocations = [0xDC62A, 0xDC8AA, 0xDC96C, 0xDC9AA, 0xDCA2A, 0xDCB2A, 0xDCBAA, 0xDD0C4, 0xDD0E6,
    0xDD23A, 0xDD306, 0xDD34A, 0xE7418, 0xE745C, 0xE74A0, 0xE9D5C, 0xE9D7E, 0xE9ED2,
    0xE9F9E, 0xE9FE2, 0xF997C, 0xF997C, 0xF99C0, 0xF9A04, 0xFEFFC, 0xFF01E, 0xFF172,
    0xFF23E, 0xFF282, 0x108364, 0x1083A8, 0x1083EC, 0x10C260, 0x10C282, 0x10C3D6, 0x10C4A2,
    0x10C4E6, 0x123604, 0x123648, 0x12368C, 0x12A6DC, 0x12A6FE, 0x12A852, 0x12A91E, 0x12A962,
    0x137F80, 0x137FC4, 0x138008, 0x13BF44, 0x13BF66, 0x13C0BA, 0x13C186, 0x13C1CA, 0x149734,
    0x149778, 0x14D078, 0x14D09A, 0x14D1EE, 0x14D2BA, 0x14D2FE, 0x150320, 0x150364, 0x1503A8,
    0x1517E4, 0x151806, 0x15197C, 0x151A48, 0x151A8C, 0x153810, 0x153854, 0x153898, 0x1543E0,
    0x154402, 0x154600, 0x154644, 0x15ECE0, 0x15ED24, 0x15ED68, 0x162678, 0x16269A, 0x166CE4,
    0x166D06, 0x166F04, 0x166F48, 0x16FCF0, 0x16FD34, 0x16FD78, 0x172448, 0x17246A, 0x1751A0,
    0x1751C2, 0x175316, 0x1753E2, 0x175426, 0x17C3E4, 0x17C428, 0x1801E4, 0x180206, 0x18035A,
    0x180426, 0x18046A, 0x183F34, 0x183F78, 0x183FBC, 0x1845E8, 0x18460A, 0x18464E, 0x184692,
    0x186C7C, 0x186C9E, 0x189714, 0x189736, 0x196E48, 0x196E6A, 0x1A1890, 0x1A394C, 0x1A7818,
    0x1A8830, 0x1A9D94, 0x1AB300, 0x1AC5CC, 0x1AD30C, 0x1AE878, 0x1AF444, 0x1B19EC, 0x1B3E14,
    0x1B66FC, 0x1B6E34, 0x1BC074, 0x1BE6BE, 0x1BE8C0, 0x1BEFF8, 0x1C051C, 0x1C7260, 0x1C9890,
    0x1CC7EC, 0x1CC82E, 0x1CF814, 0x1D4348, 0x1D60B8, 0x1D9F20, 0x1DD060, 0x1DEF1C, 0x1E1F28,
    0x1E1F6A, 0x1F0074, 0x1F0096, 0x1F1F4C, 0x1F5A34, 0x1FA7E0, 0x1FB9D8, 0x1FDF58, 0x1FDF9A,
    0x201374, 0x203BF4, 0x2055C4, 0x20831C, 0x20B3BC, 0x20C0E8, 0x20D1E4, 0x218CD4, 0x21C3D0,
    0x21DEF0, 0x23F834, 0x23F988, 0x23FA54, 0x23FA98, 0x2476A0, 0x2476E4, 0x24A9FC, 0x53F4E6,
    0x596D22, 0x599922, 0x5BA46E, 0x5BD09A, 0x5BF426, 0x5C220E, 0x5C4AAA, 0x5C7452, 0x5C9B22,
    0x5CCC90, 0x5CCCD2, 0x5E2C22, 0x609D42, 0x7DB192]

// Get canvas to render preview
var canvas = document.getElementById('kirbyCanvas');
ctx = canvas.getContext('2d');
ctx.imageSmoothingEnabled = false;

// Create image object, draw Kirby sprite .png upon it
// When first run, KAM is the selected game, so draw GBA .png
var img = new Image();
img.crossOrigin = "Anonymous";
img.src = "./sprites/kirby_gba.png"

img.onload = function () {
    drawKirby();
}

// Draw small Kirby sprite on canvas, then scale it
function drawKirby() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, img.width, img.height);
    imageData = ctx.getImageData(0, 0, img.width, img.height);
    ctx.drawImage(canvas, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height);

    // Global array of original pixel values
    originalPixelArray = Uint8ClampedArray.from(imageData.data)

    var colors = document.getElementsByClassName('jscolor')
    pal = getPaletteForGame()
    for (var i = 0; i < pal.length; i++) {
        changeColor(i, colors[i].jscolor)
    }
}

function getPaletteForGame() {
    if (game == 'kndl') {
        return gamePalettes[0]
    } else if (game == 'kam') {
        var player = Number(document.getElementById("player").value)
        return gamePalettes[player]
    } else if (game == 'kss') {
        return gamePalettes[5]
    }
}

// Iterate through pixels of Kirby image, recolor if a match
function changeColor(oldIndex, newColor) {
    // First, set the newColor for the current game's array
    var currentPalette = getPaletteForGame()
    currentPalette[oldIndex] = rgb2hex(newColor.rgb)

    // Pixel array is four parts: R, G, B, A
    var length = originalPixelArray.length / 4;
    var newPixelArray = Uint8ClampedArray.from(imageData.data)
    if (game == 'kam' || game == 'kndl') {
        var originalPalette = originalPalettes[0]
    } else if (game == "kss") {
        var originalPalette = originalPalettes[1]
    }

    for (var i = 0; i < length; i++) {
        var index = 4 * i;

        var r = originalPixelArray[index];
        var g = originalPixelArray[index + 1];
        var b = originalPixelArray[index + 2];
        var origRGB = hex2rgb(originalPalette[oldIndex])

        if (r == origRGB[0] && g == origRGB[1] && b == origRGB[2]) {
            newPixelArray[index] = newColor.rgb[0];
            newPixelArray[index + 1] = newColor.rgb[1];
            newPixelArray[index + 2] = newColor.rgb[2];
        }
    }
    imageData.data.set(newPixelArray)
    ctx.putImageData(imageData, 0, 0);
    ctx.drawImage(canvas, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height);
}

// Reads and verifies specified file
function readFile(evt) {
    var f = evt.target.files[0];
    if (!f) {
        alert("Failed to read file");
    }
    else if ((game == "kam") && (f.size < kamMemLocationsP1[kamMemLocationsP1.length - 1])) {
        alert(f.name + " is too small to be an Amazing Mirror ROM.")
    }
    else if ((game == "kndl") && (f.size < kndlMemLocations[kndlMemLocations.length - 1])) {
        alert(f.name + " is too small to be a Nightmare in Dream Land ROM.")
    }
    else if ((game == "kss") && (f.size < kssMemLocations[kssMemLocations.length - 1])) {
        alert(f.name + " is too small to be a Kirby Super Star ROM.")
    }
    else {
        var fr = new FileReader();
        fr.onload = function (e) {
            saveButton.disabled = false
            name = f.name.split('.')[0]
            var ext = f.name.split('.')[1]
            name += "_new." + ext

            var arrayBuffer = fr.result
            rom = new Uint8Array(arrayBuffer)
        }
        fr.readAsArrayBuffer(f);
    }
}

// Replace bytes in ROM with new color values
function rewriteColor() {
    // In KAM, need to write for all 4 players
    if (game == "kam") {
        for (var p = 0; p < kamMemLocations.length; p++) {
            var pal = gamePalettes[p+1] // This works currently, but may need to change
            var addresses = kamMemLocations[p]
            for (var i = 0; i < pal.length; i++) {
                var hex = parseInt(pal[i], 16)
                var gba = rgb2gba(hex)
                var first = (gba >> 8) & 0xFF
                var second = gba & 0xFF
                for (var j = 0; j < addresses.length; j++) {
                    rom[addresses[j] + (2 * i)] = second
                    rom[addresses[j] + (2 * i) + 1] = first
                }
            }
        }
    } else {
        var pal = getPaletteForGame()
        if (game == "kndl") {
            addresses = kndlMemLocations
        } else if (game == "kss") {
            addresses = kssMemLocations
        }
        for (var i = 0; i < pal.length; i++) {
            var hex = parseInt(pal[i], 16)
            var gba = rgb2gba(hex)
            var first = (gba >> 8) & 0xFF
            var second = gba & 0xFF
            for (var j = 0; j < addresses.length; j++) {
                rom[addresses[j] + (2 * i)] = second
                rom[addresses[j] + (2 * i) + 1] = first
            }
        }
    }
}

// Writes and downloads the modified file
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

// Change palettes and redraw to chosen preset
function setPreset() {
    var presetIdx = Number(presetList.value)
    var colors = document.getElementsByClassName('jscolor')
    var pal = getPaletteForGame()
    pal = presetPalettes[presetIdx]

    bodyList.value = presetIdx
    feetList.value = presetIdx

    for (var i = 0; i < pal.length; i++) {
        colors[i].jscolor.fromString(presetPalettes[presetIdx][i])
        changeColor(i, colors[i].jscolor)
    }
}

// TODO: Merge this with setPreset
function setBody() {
    var presetIdx = Number(bodyList.value)
    var colors = document.getElementsByClassName('jscolor')
    var pal = getPaletteForGame()
    pal = presetPalettes[presetIdx]

    for (var i = 0; i < pal.length - 3; i++) {
        colors[i].jscolor.fromString(presetPalettes[presetIdx][i])
        changeColor(i, colors[i].jscolor)
    }
}

function setFeet() {
    var presetIdx = Number(feetList.value)
    var colors = document.getElementsByClassName('jscolor')
    var pal = getPaletteForGame()
    pal = presetPalettes[presetIdx]

    for (var i = pal.length - 3; i < pal.length; i++) {
        colors[i].jscolor.fromString(presetPalettes[presetIdx][i])
        changeColor(i, colors[i].jscolor)
    }
}

// Randomly picks a body and foot color from two different presets
function randomizeColor() {
    var col1 = randomChoice(presetPalettes)
    var col2 = randomChoice(presetPalettes)
    var colors = document.getElementsByClassName('jscolor')
    var pal = getPaletteForGame()

    for (var i = 0; i < pal.length; i++) {
        // For now, assume last three colors are the feet, rest are body
        if (i < pal.length - 3) {
            colors[i].jscolor.fromString(col1[i])
        } else {
            colors[i].jscolor.fromString(col2[i])
        }
        changeColor(i, colors[i].jscolor)
    }
}

// Shows the proper number of buttons for the given game
function displayButtons(cols) {
    var nodes = document.getElementsByClassName("jscolor")
    for (var i = 0; i < nodes.length; i++) {
        if (i < cols.length) {
            nodes[i].classList.remove("hidden")
        } else {
            nodes[i].classList.add("hidden")
        }
    }
}

function changeGame() {
    game = document.getElementById('game').value
    var buttons = document.getElementsByClassName('jscolor')
    // Show/hide player selection
    if (game == "kam") {
        document.getElementById("playerSelect").classList.remove("hidden")
    } else {
        document.getElementById("playerSelect").classList.add("hidden")
    }

    // Change the sprite image
    if (game == "kam" || game == "kndl") {
        img.src = "./sprites/kirby_gba.png"
    } else if (game == "kss") {
        img.src = "./sprites/kirby_kss.png"
    }
    var colors = getPaletteForGame()
    displayButtons(colors)
    document.getElementById("presets").selectedIndex = 0

    for (var i = 0; i < colors.length; i++) {
        buttons[i].jscolor.fromString(colors[i])
    }
}

function populatePresets(element) {
    for (i = 0; i < colorNames.length; i++) {
        var opt = document.createElement('option')
        opt.value = i
        opt.innerHTML = colorNames[i]
        element.appendChild(opt)
    }
}

var name
var rom
var game = "kam"

var saveButton = document.getElementById('save')
saveButton.addEventListener('click', writeFile)

document.getElementById('fileinput').addEventListener('change', readFile, false)
document.getElementById('random').addEventListener('click', randomizeColor)

var presetList = document.getElementById('presets')
var bodyList = document.getElementById('body')
var feetList = document.getElementById('feet')
populatePresets(presetList)
populatePresets(bodyList)
populatePresets(feetList)
