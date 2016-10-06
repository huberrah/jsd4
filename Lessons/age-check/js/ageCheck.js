// Structure
// ------------------------------------------
var input  = document.querySelector('.age-check input');
var button = document.querySelector('.age-check button');
var p      = document.querySelector('.age-check p');


// Events
// ------------------------------------------
button.addEventListener('click', checkAge);


// Event Listeners
// ------------------------------------------
function checkAge(e) {
	var age = parseInt(input.value);
	var privilege = getPrivilege(age);
	displayPrivilege(privilege);
}


// Update page functions
// ------------------------------------------
function displayPrivilege(privilege) {

	p.innerHTML = privilege
}




// Determine the privilege to display
// ------------------------------------------

// TODO: write the getPrivilege function here
function getPrivilege() {
	if( age < 16 ) 
		return "You cannot do much";
	if(age >= 16)
		return "You can drive!";
	if(age >= 18) 
		return "You can vote!";
	if(age >= 21)
		return "You you can drink alcohol";
	if(age >= 25)
		return "You can rent a car";
	if(age >= 35)
		return "You can run for President";
	if (age >= 62)
		return "You can collect social security";
}