const b = document.querySelectorAll('button');
const numbers = Array.from(document.querySelector('[data-number]'));
const operator = document.querySelector('[data-operator]');
const allClear = document.querySelector('[data-clear]');

b.forEach(b => {
    b.addEventListener('click', userClick);

    function userClick(){
        let buttonVal = this.textContent;
        parseInt(buttonVal);
    };
});

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