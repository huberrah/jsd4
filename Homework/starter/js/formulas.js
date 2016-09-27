
// Instructions for your homework
// //////////////////////////////////////////////////////////////////
// 1.   Here is where your functions should be defined
// 2.	 What should you name your functions?  Hint:  check the console to see which functions are already being called.  Are they all "defined?"  If not yet defined... then define them here!
// 3.	 Be sure to link up this file in your HTML doc
/////////////////////////////////////////////////////////////////////

alert("Enter values in the corresponding box");

function calcLongestSide (pyA.value, pyB.value) {
if (pyA.value.length > 0 && pyB.value.length > 0) {
		
		pyC.value = Math.sqrt(Math.pow(pyA.value,2) + Math.pow(pyB.value));
		return pyC.value; **/
	}
	
}

function calcCircumference (var r) {
	if (r.value > 0) {
	
	c = (2 * Math.PI * r);
	
	return c;
	}
	
	}

function calcFahrenheitToCelcius (var tempF) {
	
	if (tempF.value > 0) {
	
	tempC = (tempF- 32) * 5/9;
	return TempC;
	}

function calcCelciusToFarenheit (var tempC) {
	
	if (tempC.value > 0) {
		
	tempF = (tempC + 32)* 9/5;
	
	return tempF;
	}
}
}