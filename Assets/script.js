// variable for all possible characters to choose from based on user decisions
var passCharacters = [];

var password = "";

// user prompt to determine how long the user wants the password
do {
    var passLength = parseInt(window.prompt("Please choose a password length between 8 and 128 characters",""));
}while(isNaN(passLength) || passLength > 128 || passLength < 8);

// adds lowercase letters to passCharacters if user hits ok
var a = confirm("Do you want to have lowercase letters in your password?");
    if (a === true) {
        passCharacters.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
    }

// adds uppercase letters to passCharacters if user hits ok
var b = confirm("Do you want to have uppercase letters in your password?");
    if (b === true) {
        passCharacters.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
}

// add numbers to passCharacters if the user hits ok
var c = confirm("Do you want to have numbers in your password?");
    if (c === true) {
        passCharacters.push("1", "2", "3", "4", "5", "6", "7", "8", "9", "0");
    }

// adds special characters to passCharacters if user hits ok
var d = confirm("Do you want to have special characters in your password?");
    if (d === true) {
        passCharacters.push("!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?", "=", "+");
    }
    else if (a === false && b === false && c === false && d === false) {
        alert("You must choose at least one option! The webpage will now reload.");
        
        // reloads the webpage if they don't choose any passCharacters options
        window.location.reload();
    }

// for loop to choose password characters and to display it on webpage
function generate () {
for (var i = 0; i < passLength; i++) {
    password = password + passCharacters[Math.floor(Math.random() * Math.floor(passCharacters.length -1))];
}
document.getElementById("display").value = password;

// resets the password back to nothing so the button generate shows a new password based on the passLength
password = "";
}
// end of generate function

// function to copy to clipboard
function copyPassword() {
    document.getElementById("display").select();
    document.execCommand("Copy");
    alert("Password was copied to clipboard");
}


