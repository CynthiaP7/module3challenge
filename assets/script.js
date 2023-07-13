var generateBtn = document.querySelector("#generate");

function writePassword() {
    var password = generatePassword();
    var passwordText = document.quesySelector("#password");

    passwordText.value = password;
}

function generatePassword() {
    var uppercase = confirm ("Use uppercase chracters?");
    var lowercase = confirm ("Use lowercase characters?");
    var length = prompt ("Number of characters in the password (8-128)");
    var numeric = confirm ("Use number characters?");
    var specialCharacters = confirm ("Use special characters?");

    if (uppercase === false && lowercase === false && numeric === false && specialCharacters === false) {
        alert ("You must select one")
        return
    }

    


    return password
}




generateBtn.addEventListener("click", writePassword);