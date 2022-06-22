
// Password selection arrays
var promptAnswersArray = [];
var passwordLength = 8;
var specialCharactersArray = ['!','@','#','$','%','^','&','*','(',')','-','?','>','<','/',];
var lowerCaseArray =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbersArray = ['1','2','3','4','5','6','7','8','9','0'];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// prompts for user to select password criteria

function promptAnswer() {
  promptAnswersArray = [];
  
  passwordLength = parseInt(prompt("Enter a password length (8-128 characters)"));

  if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Password length invalid, please enter a numerical value between 8-128.");
    return false;
  }

  if(confirm("Do you want to include lowercase letters?")) {
    promptAnswersArray = promptAnswersArray.concat(lowerCaseArray);
  }

  if(confirm("Do you want to include uppercase letters?")) {
    promptAnswersArray = promptAnswersArray.concat(upperCaseArray);
  }

  if(confirm("Do you want to include special characters?")) {
    promptAnswersArray = promptAnswersArray.concat(specialCharactersArray);
  }

  if(confirm("Do you want to include numbers?")) {
    promptAnswersArray = promptAnswersArray.concat(numbersArray);
  }
  
  return true;
}

// Select a random index from prompt answers to feed into generated password
function generatePassword() {
  var password = "";
  for(var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * promptAnswersArray.length);
    password = password + promptAnswersArray[randomIndex];
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var correctAnswers = promptAnswer();
  var passwordText = document.querySelector("#password");

  if (correctAnswers) {
    var finalPassword = generatePassword();
  passwordText.value = finalPassword;
  } else {
    passwordText.value = "";
  }
}

