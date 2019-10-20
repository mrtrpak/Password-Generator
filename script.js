// variable for all possible characters to choose from based on user decisions
var passCharacters = [];

// user prompt to determine how long the user wants the password
do {
    var passLength = parseInt(window.prompt("Please choose a password length between 8 and 128 characters",""), 10);
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



