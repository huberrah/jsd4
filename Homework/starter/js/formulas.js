
// Instructions for your homework
// //////////////////////////////////////////////////////////////////
// 1.   Here is where your functions should be defined
// 2.	 What should you name your functions?  Hint:  check the console to see which functions are already being called.  Are they all "defined?"  If not yet defined... then define them here!
// 3.	 Be sure to link up this file in your HTML doc
/////////////////////////////////////////////////////////////////////

function calcLongestSide (a,b) {
		
		return Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
	
}

function calcCircumference (radius) {	
	return (2 * Math.PI * radius);

}
	

function calcFahrenheitToCelcius (fahrenheit) {
	
	return (fahrenheit- 32) * (5/9);
}

function calcCelciusToFarenheit (celsius) {
	
	return (celsius * 9/5) + 32;
	
}