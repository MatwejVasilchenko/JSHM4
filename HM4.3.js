const sumbitYourPassword = prompt("Please enter your password");
const sumbitYourPassworAgain = prompt("Please enter your password again");

// я зробив так але я знаю що за завданням треба було зробити так: 
//const SAVED_PASSWORD = 1463;
// const sumbitYourPassworAgain = prompt("Please enter your password");

const resultPassword = sumbitYourPassword === sumbitYourPassworAgain;
console.log(resultPassword)
