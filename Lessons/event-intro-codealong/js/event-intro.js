//using main.dispatchEvent(me); dispatches it

var counter = 0;
//Elements

var main = document.querySelector("main");
var p = document.createElement("p");
p.innerHTML = counter;
main.appendChild(p);

//Create Event
var me = document.createEvent("MouseEvent");
me.initEvent("click")

//Listen for Event
main.addEventListener("dblclick", count);

//Event Handler callback function
function count(event) {

console.log(event);
console.log("type", event.type);
console.log("target",event.target);
console.log("content", event.target.innerHTML);
console.log("fn count");
p.innerHTML = counter;
counter++;
}
