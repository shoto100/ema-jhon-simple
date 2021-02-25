// const plus = document.getElementById("+");
// const minus = document.getElementById("-");
// const multiply = document.getElementById("*");
// const divide = document.getElementById("/");
// const zero = document.getElementById("0");
// const one = document.getElementById("1");
// const two = document.getElementById("2");
// // const divide = document.getElementById("/");
// // const divide = document.getElementById("/");
// // const divide = document.getElementById("/");
// // const divide = document.getElementById("/");
// // const divide = document.getElementById("/");
// // const divide = document.getElementById("/");
// // const divide = document.getElementById("/");
// // const divide = document.getElementById("/");



// zero.addEventListener("click", function() {
//     var outputValue = document.getElementById("output-value");
//     outputValue.innerText = 0;
// })
// one.addEventListener("click", function() {
//     var outputValue = document.getElementById("output-value");
//     outputValue.innerText = 1;
// })
// two.addEventListener("click", function() {
//     var outputValue = document.getElementById("output-value");
//     outputValue.innerText = 2;
// })

function getHistory() {
    document.getElementById("history-value").innerText;
}


function printHistory(num) {
    document.getElementById("history-value").innerText = num;
}


function getOutput() {
    document.getElementById("output-value").innerText;
}


function printOutput(num) {
    if (num == "") {
        return document.getElementById("output-value").innerText = num;
    }
    else {
        return document.getElementById("output-value").innerText = getFormattedNumber(num);
    }
}

function getFormattedNumber(num) {
    //! number er moddey coma anar system
    var formattedNumber = Number(num);
    var value = formattedNumber.toLocaleString("heh");
    return value;
}
printOutput("12312")

function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}