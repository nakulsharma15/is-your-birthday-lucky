const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-button");
const displayMessage = document.querySelector("#output-container");

checkButton.addEventListener("click",checkBirthDateIsLucky);

function checkBirthDateIsLucky() {

    const date = dateOfBirth.value;
    let numberToCheck = luckyNumber.value;

    if(numberToCheck <= 0) {
        showMessage("Please enter values greater than 0!")
    }
    else if (date && numberToCheck) {
        let sum = calculateSum(date);
      
        if(sum % numberToCheck === 0)
        return showMessage("Your Birthday is Lucky 🥳 🥳");
        else
        showMessage("Your Birthday is not that lucky 😕");
      }
       else {
        showMessage("Please enter both the fields");
      }


}

function calculateSum(date) {

    date = date.replaceAll("-","");
    let sum = 0;
    for(let i = 0 ; i < date.length ; i++) {
        sum += Number(date.charAt(i));
    }

    return sum;
}

const showMessage = (message) => {
    displayMessage.innerText = message;
  };


