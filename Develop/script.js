// assignments go here

var hasSpecialCharacters= ['!','@','#','$','%','&','*','(',')','-','<','>','?','.','\'-','=']

var hasNumericCharacters= ['0','1','2','3','4','5','6','7','8','9']

var hasLowerCharacters= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

var hasCapitalCharacters= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Z']

function retrievePasswordOption() {
  var length = parseInt(prompt("Choose Length between 8 and 128 Characters"));
   if (Number.isNaN (length)){
    alert("Please provide a number");}
    if (length < 8) {
        alert("Please add more than 8 characters");}
      
    if (gilength > 128) {
        alert("Please use no more than 128 characters");}
    
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
retrievePasswordOption(); 

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
