var training{

	cumulativeGrade:  null,
	corporateResponsibilityGrade: null,
	sexualHarrassment:  null,
	engagement:  null,
	inclusion:   null,

	function gradeVideoQuiz(training) {
	if(training <= 100 && training >=90)
	console.log("You got an A");

	if(training <90 && training >= 80)
	console.log("You got a B");

	if(training < 80 && training >= 70)
	console.log("You got a C");

	if(training < 70 && training >= 60)
	console.log("You got a D");

	if(training < 60 && training >= 0)
	console.log("You got a E");

	}


}
