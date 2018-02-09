"use strict";
function validate(){
	document.getElementsByTagName("input")[2].value = 'Hoi';
}
function getData(){
	document.getElementsByTagName("body")[0].innerHTML =
		 document.getElementsByTagName("input")[0].value  + " " +
		 document.getElementsByTagName("input")[1].value ; 
}
