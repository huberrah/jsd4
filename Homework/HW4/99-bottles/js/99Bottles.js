// Elements
// ------------------------------------------
var song  = document.querySelector(".song");


//create elements
var line_group  = document.createElement("ul");
song.appendChild(line_group);

// Update page
for(i = 99; i >= 0; i--){

	if(i > 2) {
	l1 = i + " bottles of beer on the wall, " + i + " bottles of beer.</br>"
	l2 = "Take one down, and pass it around " + (i-1) +  " bottles of beer on the wall."
	}

	else if(i==2){
	l1 = i + " bottles of beer on the wall, " + i + " bottles of beer.</br>"
	l2 = "Take one down and pass it around, " + (i-1) + " bottles of beer on the wall."
	}	 

	else if(i==1) {
	l1 = i + "bottle of beer on the wall, " + i + "bottle of beer.<br>"
	l2 = "Take one down and pass it around, no more bottles of beer on the wall"
	}
	else if(i==0){
	l1 = "No more bottles of beer on the wall, no more bottles of beer<br>"
	l2 = "Go to the store and buy some more, 99 bottles of beer on the wall"
	}
//append the li
var line = document.createElement("li");

//concatenate the string
var lyric = l1 + l2;
line.innerHTML = lyric;

//append 
line_group.appendChild(line);
}
