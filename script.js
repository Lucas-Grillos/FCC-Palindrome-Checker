const textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const result = document.getElementById('result');
let textFocus = false;
let alphaNumeric = /[a-z0-9]/i;

const printResults = (textValue, bool) => {
    result.innerHTML = `<span>${textValue}</span> ${bool ? 'is': 'is not'} a palindrome!`
}

const checkPalindrome = (textValue, valueArray) => {
    let value = valueArray.join("");
    let reversedValue = valueArray.reverse().join("");
    if (value===reversedValue) {
        printResults(textValue, true);
    }
    else {
        printResults(textValue, false);
    }
}

const checkEmpty = () => {
    let textValue = textInput.value;
    let valueArray = textValue.split("").filter(value => alphaNumeric.test(value)).map(value => value.toLowerCase());
    
    result.innerHTML = '';
    textInput.value = '';
    if(valueArray.length<1) {
        alert("Please input a value");
        return;
    }
    else {
        checkPalindrome(textValue, valueArray)
    }
}

const checkKeyPress = (event) => {
    if(event.keyCode === 13 && textFocus) {
        textInput.blur();
        checkEmpty()
    }
}



checkButton.addEventListener('click', checkEmpty)
document.addEventListener('keydown', checkKeyPress)
textInput.addEventListener('focus', () => {textFocus = true});
textInput.addEventListener('focusout', () => {textFocus = false});