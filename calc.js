const b = document.querySelectorAll('button');
const numbers = document.querySelectorAll('[data-number]');
const operator = document.querySelectorAll('[data-operator]');
const allClear = document.querySelector('[data-clear]');
const decimal = document.querySelectorAll('[data-decimal]');

// Event listeners to get value of button clicked

numbers.forEach(numbers => {
    numbers.addEventListener('click', numberClick);
    function numberClick(){
        let numVal = this.textContent;
        const numClickInt = parseInt(numVal);
        console.log(numClickInt);
    };
});

operator.forEach(operator => {
    operator.addEventListener('click', operatorClick);
    function operatorClick(){
        let opVal = this.textContent;
        console.log(opVal);
    };
});

decimal.forEach(decimal => {
    decimal.addEventListener('click', decimalClick);
    function decimalClick(){
        let decClick = this.textContent;
        console.log(decClick);
    };
});

// allClear.forEach(allClear =>) {
//     allClear.addEventListener('click', clearClick);
//     function clearClick(){
//         let clearAll
//     }
// }

function add(num1, num2) {
    return num1 + num2;
}

const subtract = function(num1, num2) {
	return num1 - num2
};

const divide = function(num1, num2) {
	return num1 / num2
};

const multiply = function(num1, num2) {
    return num1 * num2
};

// const operate = function(operater, num1, num2) {
//         if (operater === plus) {
//             add();
//         } else if (operater === minus) {
//             subtract();
//         } else if (operater === divide) {
//             divide();
//         } else if (operater === times) {
//             multiply();
//         };
//     };
// };