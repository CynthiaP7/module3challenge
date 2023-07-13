var generateBtn = document.querySelector("#generate");

function writePassword() {
    var password = generatePassword();
    var passwordText = document.quesrySelector("#password");

    passwordText.value = password;
}

