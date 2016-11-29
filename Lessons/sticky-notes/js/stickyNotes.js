
//create the expression using (function() {}) iife
//immediately invoked function expression
(function(win, d, jq){

console.log('hello sticky notes');

// Elements
// ---------------------------
var container = d.querySelector(".container");
var button = d.querySelector("button");
var boxColor = d.querySelector(".box-color");
var boxNote = d.querySelector(".box-note");


win.addEventListener('load', function() {
    var noteCount = 1;
                        
    button.addEventListener('click', function() {
    console.log('click');
                            
    var color = (".box-color").val();
    //var color = boxColor.value;
    //var note =boxNote.value;
    var note = jq(".box-note").val();
    var div = d.createElement("div");
        
        div.id = "note-" + noteCount;
        div.classList.add("box");
        div.innerHTML = note;
        div.style.backgroundColor = color;
                            
        container.appendChild(div);
                            noteCount++;
                    });
                        
                        });


function deleteNote(e) {
    console.log('deleteNote',e);
    
    var id = this.id;
    
    //e.target.id;
    
    var div = document.querySelector("#" + id);
    container.removeChild(div);
    
    container.removeChild(this);
}
  })(window, document, jQuery)