const textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const result = document.getElementById('result');
let alphaNumeric = /[a-z0-9]/i;


const checkPalindrome = () => {
    let textValue = textInput.value;
    if(!textValue) {
        alert("Please input a value");
        return
    }
    else {
        let valueArray = textValue.split("").filter(value => alphaNumeric.test(value)).map(value => value.toLowerCase());
        let value = valueArray.join("");
        let reversedValue = valueArray.reverse().join("");
        alert(reversedValue);
    }
}

checkButton.addEventListener('click', checkPalindrome)