"use strict";
var formInput = document.forms["formulier"];
function validate(){
	formInput["submit"].value = 'Hoi';
}
function getData(){
	document.getElementsByTagName("body")[0].innerHTML =
		formInput["name"].value  + " " +
		formInput["surname"].value; 
}
