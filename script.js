const firstNumber = document.querySelector(".num-A");
const secondNumber = document.querySelector(".num-B");
const add = document.querySelector(".add");
const subtract = document.querySelector(".subtract");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const clear = document.querySelector(".clear");
const result = document.querySelector(".result");

const clearInput = function () {
	firstNumber.value = "";
	secondNumber.value = "";
};

add.addEventListener("click", function () {
	if (firstNumber.value != "" && secondNumber.value != "") {
		console.log("1");
		result.textContent = +firstNumber.value + +secondNumber.value;
		clearInput();
	}
});

subtract.addEventListener("click", function () {
	if (firstNumber.value != "" && secondNumber.value != "") {
		result.textContent = +firstNumber.value - +secondNumber.value;
		clearInput();
	}
});

multiply.addEventListener("click", function () {
	if (firstNumber.value != "" && secondNumber.value != "") {
		result.textContent = +firstNumber.value * +secondNumber.value;
		clearInput();
	}
});

divide.addEventListener("click", function () {
	if (firstNumber.value != "" && secondNumber.value != "") {
		result.textContent = +firstNumber.value / +secondNumber.value;
		clearInput();
	}
});

clear.addEventListener("click", function () {
	result.textContent = "=";
	clearInput();
});
