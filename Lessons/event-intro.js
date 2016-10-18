var i = 0;
//Elements

var main = document.querySelector("main");

//Create Event
var me = document.createEvent("MouseEvent");
me.initEvent("click");

main.addEventListener("click", count);

function count() {
console.log("fn count"+ i);
i++
}
