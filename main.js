let keys = document.querySelectorAll(".button") 
let output = document.getElementById("buttonOutput") 
let clear = document.getElementById("buttonClear") 
let equals = document.getElementById("buttonEquals") 
let multiplication = document.getElementById("buttonMultiplication") 
let decimal = document.getElementById("buttonDecimal")
let exponent = document.getElementById("buttonExponent")
// lines 1-7 get an array of all buttons and a few individual buttons
// I will need later for special cases

let display = document.createElement("div") 
let text = document.createTextNode("") 
display.appendChild(text) 
output.appendChild(display) 
// lines 11-14 form an element with an empty string and add it to 
// the output display area to be populated as a user clicks on a key

for (let key of keys) {

    key.addEventListener("click" , function () {

        if (key!==equals && key!==clear && key!==output && 
        key!==multiplication && key!==decimal) {
            display.innerText += key.innerText
        }
// lines 22-25 exclude only keys that have special cases

        else if (key === decimal) {
            if (display.innerText.length === 0) {
                display.innerText += `0${key.innerText}`
            }
            else {
                display.innerText += key.innerText
            }
        }
// lines 28-35 handle case that decimal key is clicked because want
// 0. instead of just . but only if display is empty to begin with

        else if (key === multiplication) {
            display.innerText += "*"
        }
// lines 39-41 handle case that multiplication key is clicked because
// we need * instead of X

        else if (key === equals) {
            if (display.innerText.length !== 0) {
                try {
                    clearDisplay(math.eval(display.innerText))
                } catch (error) {
                    clearDisplay("syntax error")
                }
            }
        }
// lines 45-53 handle case that equals key is clicked because need to
// clear display and repopulate with answer of calculation

        else if (key === clear) {
            clearDisplay("")
        }
// lines 57-59 handle case that clear key is clicked because need to
// reset display
    })

    key.addEventListener("mouseenter", function(event){
        event.target.style.backgroundColor = "#611C67"
        }, false);
    
    key.addEventListener("mouseleave", function(event){
        event.target.style.backgroundColor = "#A233AB";
        }, false);
// lines 63-70 add an effect of changing background color of each
// key while mouse hovers over it
}
// calculator operations end here

function clearDisplay(newText) {
    display.remove()
    display = document.createElement("div") 
    text = document.createTextNode(newText) 
    display.appendChild(text)
    output.appendChild(display)
}
// created above function to clean up code a little because I
// previously used lines 77-81 multiple times

document.addEventListener("keydown", function(keyboard) {
    allowedKeys = ["0","1","2","3","4","5","6","7","8","9","0",
    "*","/","-","+","%","^","(",")","."]

    if (allowedKeys.includes(keyboard.key)) {
        display.innerText += keyboard.key
    }

    else if (keyboard.key === "Enter" || keyboard.key === "=") {
        switch (keyboard.key) {
            case "Enter":
                try {
                    clearDisplay(math.eval(display.innerText))
                } catch (error) {
                    clearDisplay("syntax error")
                    }
        }
        switch (keyboard.key) {
            case "=":
                try {
                    clearDisplay(math.eval(display.innerText))
                } catch (error) {
                    clearDisplay("syntax error")
                    }
        }
    }
}, true)
// lines 86-112 implement keyboard input, but only for keys on
// my calculator except for clear
