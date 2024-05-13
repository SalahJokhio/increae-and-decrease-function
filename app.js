let number = 0;
const numberElement = document.getElementById("number");
const evenOddElement = document.getElementById("evenOdd");

document.getElementById("increaseBtn").addEventListener("click", function() {
    number++;
    updateNumberDisplay();
    checkEvenOdd();
});

document.getElementById("decreaseBtn").addEventListener("click", function() {
    number--;
    updateNumberDisplay();
    checkEvenOdd();
});

document.getElementById("resetBtn").addEventListener("click", function() {
    number = 0;
    updateNumberDisplay();
    evenOddElement.textContent = "";
});

function updateNumberDisplay() {
    if (number < 10) {
        numberElement.textContent = "0" + number;
    } else {
        numberElement.textContent = number;
    }
}

function checkEvenOdd() {
    if (number % 2 === 0) {
        evenOddElement.textContent = "Even";
    } else {
        evenOddElement.textContent = "Odd";
    }
    adjustEvenOddFontSize();
}

function adjustEvenOddFontSize() {
    
    const textLength = evenOddElement.textContent.length;
    if (textLength > 4) {
        evenOddElement.style.fontSize = "16px"; 
    } else {
        evenOddElement.style.fontSize = "24px"; 
    }
}


updateNumberDisplay();
