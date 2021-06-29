/*var button = document.getElementsByTagName("button")[0];

button.addEventListener("click",function(){
    console.log("click!!!!");
})*/

/*
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function createListElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

button.addEventListener("click",function(){
    if(input.value.length>0){
        createListElement();
    }
})

input.addEventListener("keypress",function(event){
    if(input.value.length>0 && event.keyCode === 13){
        createListElement();
    }
})*/
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength(){
    return input.value.length;
}

function createListElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addlistAfterClick(){
    if(inputLength()>0){
        createListElement();
    }
}

function addlistAfterKeypress(event){
    if(inputLength()>0 && event.keyCode === 13){
        createListElement();
    }
}
button.addEventListener("click", addlistAfterClick);

input.addEventListener("keypress", addlistAfterKeypress);



