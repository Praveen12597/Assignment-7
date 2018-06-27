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
	output.innerHTML = sqr;
}

function clear() {
	// document.getElementById("#number").value = "";
	console.log("ghfhgfhf");
	num.value = a;
	output.innerHTML = a;
}