var num;
var output;
var sqr = 0;
var a = "";

function init() {
	num = document.querySelector("#number");
	output = document.querySelector("#output");
}

function square() {
	sqr = num.value*num.value;
	output.innerHTML = "Square of " + num.value + " = " + sqr;
}