// Declare Global variable to use Multiple Time These variable

let randomNumGenerate = document.getElementById('randomNumber');
let givenNumValue = document.getElementById('inputTake');
let submitBtnClick = document.getElementById('submitButton');
let matchingResult = document.getElementById('match');
let notmatchingResult = document.getElementById('noMatch');

// Random Pin Generate

function pinGenerate(){   
    let randomNumber = Math.floor(1000+ Math.random()*9000);
    randomNumGenerate.value = randomNumber;
    document.getElementById('number-left').innerText = 3;
    notmatchingResult.style.display = 'none';
    submitBtnClick.disabled = false;
}

// Input Value Display in input Field

function displayNumber(num){
    givenNumValue.value += num;
}

// Clear all value

function clearAllValue(){
    givenNumValue.value = '';
}

// Cleat One Value

function backspace(){
    let backspaceInput = givenNumValue;
    let backspaceInputValue = backspaceInput.value;
    if(backspaceInputValue >= 0){
        backspaceInputValue = backspaceInputValue.substr(0, backspaceInputValue.length-1);
        backspaceInput.value = backspaceInputValue;
    }
}

// Pin Match Or Not Match Check

submitBtnClick.addEventListener('click', function(){
    let changeNumber = document.getElementById('number-left').innerText;
    let inputNumber = givenNumValue.value;
    
    // Check Invalid Input
    if(inputNumber.length != 4 || isNaN(inputNumber) || inputNumber < 0){
        alert("Please Enter Four Digit Positive Number Pin");
    }

    else{

        // Check Match Input
        if(randomNumGenerate.value == givenNumValue.value){
            
            let area = document.getElementsByClassName('half-width');
            for (let i = 0; i < area.length; i++) {
                const element = area[i];
                element.style.display = 'none';
            }
            matchingResult.style.display = 'block';
            notmatchingResult.style.display = 'none';
            givenNumValue.value = '';
            randomNumGenerate.value = '';
        }
        // For Not Match Input
        else{

            notmatchingResult.style.display = 'block';
            matchingResult.style.display = 'none';
            changeNumber--;
            document.getElementById('number-left').innerText = changeNumber;
            givenNumberValue.value = '';
            if(changeNumber == 0){
                submitBtnClick.disabled = 'true';
                randomNumGenerate.value = '';
            }
        }
    }

})