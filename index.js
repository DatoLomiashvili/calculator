const display = document.getElementById("display");
function appendOnDisplay(character) {
    display.value += character;
}


function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {

        display.value = display.value.length > 0 ? eval(display.value) : '';
    } catch (error) {
        display.value = "Error";
        setTimeout(clearDisplay, 1000);
    }
}