let mainCount = 0;
let inc = 0;
let dec = 0;

function incBtn() {
    mainCount++;
   inc++;
    updateDisplay()
}

function decBtn() {
   mainCount--;
   dec++;
    updateDisplay()
}

function resetBtn() {
    mainCount = 0;
    updateDisplay()
}

function customInc() {
    const value = parseInt(document.querySelector("#customValue").value);

    mainCount = mainCount + value;
    inc++;
        updateDisplay()
}

function customDec() {
    const value = parseInt(document.querySelector("#customValue").value);
    mainCount = mainCount - value;
    dec++;
        updateDisplay()
}


function updateDisplay() {
    mainDisplay = document.querySelector(".mainDisplay");
    mainDisplay.innerText = mainCount;

    incClickCount = document.querySelector("#incClick");
    incClickCount.innerText = inc;

    decClickCount = document.querySelector("#decClick");
    decClickCount.innerText = dec;
    
}



// let mainCount = 0;
// let inc = 0;
// let dec = 0;

// function incBtn() {
//     mainCount = mainCount + 1;
//     inc = inc + 1;
//     updateDisplay()
// }

// function decBtn() {
//     mainCount = mainCount - 1;
//     dec = dec + 1;
//     updateDisplay()
// }

// function updateDisplay() {
//     Counter = document.querySelector(".mainDisplay");
//     Counter.innerText = mainCount;

//     incClickCounter = document.querySelector("#incClick");
//     incClickCounter.innerText = inc;

//     decClickCounter = document.querySelector("#decClick");
//     decClickCounter.innerText = dec;
// }