"use strict";
function validate(){
	document.getElementsByTagName("input")[2].value = 'Hoi';
}
function getData(){
	var formInput = document.getElementsByTagName("input");
	document.getElementsByTagName("body")[0].innerHTML =
		 formInput[0].value  + " " +
		 formInput[1].value; 
}
