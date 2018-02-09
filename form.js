"use strict";
var formInput = document.forms["formulier"];
function validate(){
	document.getElementsByTagName("fieldset")[0].style.border =
	"1px solid red";
}
function getData(){
	document.getElementsByTagName("body")[0].innerHTML =
		formInput["name"].value  + " " +
		formInput["surname"].value; 
}
