const firstNumber = document.querySelector(".num-A");
const secondNumber = document.querySelector(".num-B");
const add = document.querySelector(".add");
const subtract = document.querySelector(".subtract");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const clear = document.querySelector(".clear");
const displayResult = document.querySelector(".result");
const historyBtn = document.querySelector(".history-btn");
const historyContainer = document.querySelector(".history-container");
const historyContent = document.querySelector(".history");

const clearInput = function () {
	firstNumber.value = "";
	secondNumber.value = "";
};

const historyArray = [];
let operator;
let result;

const showHistory = function () {
	historyArray.push(
		firstNumber.value,
		operator,
		secondNumber.value,
		"=",
		result
	);
	const joined = historyArray.join(" ");

	const newLi = document.createElement("li");
	historyContent.appendChild(newLi);
	newLi.innerHTML = joined;
	historyArray.splice(0, historyArray.length);
};

const makeOperation = function () {
	displayResult.textContent = result;
	showHistory();
	clearInput();
};

add.addEventListener("click", function () {
	if (firstNumber.value != "" && secondNumber.value != "") {
		operator = "+";
		result = +firstNumber.value + +secondNumber.value;
		makeOperation();
	}
});

subtract.addEventListener("click", function () {
	if (firstNumber.value != "" && secondNumber.value != "") {
		operator = "-";
		result = +firstNumber.value - +secondNumber.value;
		makeOperation();
	}
});

multiply.addEventListener("click", function () {
	if (firstNumber.value != "" && secondNumber.value != "") {
		operator = "*";
		result = +firstNumber.value * +secondNumber.value;
		makeOperation();
	}
});

divide.addEventListener("click", function () {
	if (firstNumber.value != "" && secondNumber.value != "") {
		operator = "/";
		result = +firstNumber.value / +secondNumber.value;
		makeOperation();
	}
});

clear.addEventListener("click", function () {
	displayResult.textContent = "=";
	clearInput();
});

historyBtn.addEventListener("click", function () {
	historyContainer.classList.toggle("history-active");

	historyContainer.style.transform = "translateX(" + 200 + "px)";
});
