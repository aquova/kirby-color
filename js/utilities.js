// Randomly picks an element from an array
function randomChoice(array) {
    return array[Math.floor(Math.random() * array.length)]
}

// Utility function to convert 24-bit color to 15-bit
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

// Utility function to convert hex color as string to array of RGB ints
function hex2rgb(c) {
    var r = c.substring(0, 2)
    var g = c.substring(2, 4)
    var b = c.substring(4, 6)

    return [parseInt(r, 16), parseInt(g, 16), parseInt(b, 16)]
}

// Utility function to convert RGB color to hex code as a string
// R, G, B should all be <256
function rgb2hex(rgb) {
    var r = rgb[0]
    var g = rgb[1]
    var b = rgb[2]
    var hex = (r << 16) | (g << 8) | b
    var formattedHex = ("000000" + hex.toString(16)).slice(-6) // This ensures a 6-digit hex string
    return formattedHex
}
