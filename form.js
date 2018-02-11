"use strict";
var formInput = document.forms["formulier"];
//validate if input is changed
function validate(){
	document.getElementsByTagName("fieldset")[0].style.border =
	"1px solid red";
}
//get the input of the forms and subit it to the innerHTML
function getData(){
	document.getElementsByTagName("body")[0].innerHTML =
		formInput["name"].value  + " " +
		formInput["surname"].value; 
}
