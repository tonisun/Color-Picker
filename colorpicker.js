let colorIndicator = document.getElementById('color-indicator');

const colorPicker = new iro.ColorPicker('#color-picker', {
    width: 250,
    color: "#fff"
});

// make a handler function
function colorChangeCallback(color) {
    //console.log(color.hexString);
    colorIndicator.style.backgroundColor = color.hexString;
    colorIndicator.textContent = color.hexString;  // Diese Zeile hinzufügen
}

colorPicker.on('color:change', colorChangeCallback)

function isColorDark(hexColor) {
    const r = parseInt(hexColor.substr(1, 2), 16);
    const g = parseInt(hexColor.substr(3, 2), 16);
    const b = parseInt(hexColor.substr(5, 2), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness < 128;
}

function colorChangeCallback(color) {
    //console.log(color.hexString);
    colorIndicator.style.backgroundColor = color.hexString;
    colorIndicator.textContent = color.hexString;
    if (isColorDark(color.hexString)) {
        colorIndicator.style.color = '#FFF'; // Weiß für dunkle Hintergründe
    } else {
        colorIndicator.style.color = '#333'; // Dunkelgrau für helle Hintergründe
    }
}