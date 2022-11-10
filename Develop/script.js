// assignments go here
var CapitalCharacters= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Z']
var LowerCharacters= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var SpecialCharacters= ['!','@','#','$','%','&','*','-','<','>','?','.','\'-','=',':','~','[',']']
var NumericCharacters= ['0','1','2','3','4','5','6','7','8','9']

function retrievePasswordOption() {
  var length = parseInt(prompt("Choose Length between 8 and 128 Characters"));

  if (Number.isNaN (length)){
    alert("Please provide a number");
    return null;
  }
  
  if (length < 8) {
    alert("Please add more than 8 characters");
    return null;
  }
      
  if (length > 128) {
      alert("Please use no more than 128 characters");
      return null;
  }
    
}

var hasCapitalCharacters = confirm("Press enter to confirm using capital characters");
var hasLowerCharacters = confirm("Press enter to confirm using lower case characters");
var hasSpecialCharacters = confirm("Press enter to confirm using special characters");
var hasNumericCharacters = confirm("Press enter to confirm using numeric characters");

if (
  hasCapitalCharacters === false &&
  hasLowerCharacters === false &&
  hasSpecialCharacters === false &&
  hasNumericCharacters === false
) {
  alert("Please select one character type")
    return null;
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
