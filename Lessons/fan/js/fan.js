//Firebase application setup
// ------------------------------------------------

// Initialize Firebase
var config = {
apiKey: "AIzaSyA7N3BfBxvLBidNt9opxiAtF6IfivYF7gM",
authDomain: "bieberfanpage-2b659.firebaseapp.com",
databaseURL: "https://bieberfanpage-2b659.firebaseio.com",
storageBucket: "bieberfanpage-2b659.appspot.com",
messagingSenderId: "733557899687"
};

firebase.initializeApp(config);

// Elements
// ------------------------------------------------
var db = firebase.database();
var form = document.querySelector("form");
var messageEl = document.querySelector("#message");
var messageBoard = document.querySelector(".message-board");



// Events
// ------------------------------------------------
form.addEventListener('submit', submitForm);
document.addEventListener('DOMContentLoaded', loadState);

function submitForm(event) {
    event.preventDefault();
    var messageText = messageEl.value;
    messageEl.value = '';
    console.log(messageText);
    
    var ref = db.ref('messages');
//Create a message object
    var messageObj =  {
    content: messageText,
    votes: 0
    }
    
//push it
    ref.push(messageObj);
}

function loadState() {
    db.ref('messages').on('value', createMessages);
}

function createMessages(results) {
    console.log('createMessages', results.val());
    var newMessages = results.val();

    //reset message board
    messageBoard.innerHTML = '';
    
    for(var id in newMessages) {
        createMessage(id, newMessages[id]);
    }

}

function createMessage(id, message){
    var li = document.createElement("li");
    li.innerHTML = message.content;
    li.id = message.id;
    messageBoard.appendChild(li);
}

//remove by calling destroyMessages(id)
function destroyMessages(event){
    var id = event.target.id;
    var ref = db.ref('messages/' + id);
    ref.remove();
}

// Create Firebase application reference
// ------------------------------------------------
