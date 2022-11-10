var CapitalCharacters= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Z']
var LowerCharacters= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var SpecialCharacters= ['!','#','$','%','&','(',')','*','+','-','.','/',':',';','<','=','>','?','@','[','\\',']','^','_','`','{','|','}','~']
var NumericCharacters= ['0','1','2','3','4','5','6','7','8','9']

function retrievePasswordOption() {
  var length = parseInt(prompt("Choose length between 8 and 128 characters"));

  if (Number.isNaN (length)){
    alert("Please provide a number");
    return;
  }
  if (length < 8) {
    alert("Please add more than 8 characters");
    return;
  }    
  if (length > 128) {
      alert("Please use no more than 128 characters");
      return;
  }   

var hasCapitalCharacters = confirm("Press OK to confirm using capital characters");
var hasLowerCharacters = confirm("Press OK to confirm using lower case characters");
var hasSpecialCharacters = confirm("Press OK to confirm using special characters");
var hasNumericCharacters = confirm("Press OK to confirm using numeric characters");

if (
  !hasCapitalCharacters &&
  !hasLowerCharacters &&
  !hasSpecialCharacters &&
  !hasNumericCharacters 
  ) {
    alert("Please select one character type");
  }

var passwordOption = {
    length: length,
    hasCapitalCharacters: hasCapitalCharacters,
    hasLowerCharacters: hasLowerCharacters,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
  };

return passwordOption;
}

function getRandom(array) {
  var randIndex = Math.floor(Math.random() * array.length);
  var randElement = array[randIndex];

  return randElement;
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
