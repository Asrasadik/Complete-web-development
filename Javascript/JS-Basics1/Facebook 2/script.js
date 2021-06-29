var database = [
    {
    username:"andy",
    password: "123"
    },
    {
        username:"bobby",
        password:"456",
    },
    {
        username:"candy",
        password:"789",
    }
];

var newsFeed = [
    {
        name: "sally",
        timeline: "enjoying",
    },
    {
        name: "jilly",
        timeline: "i'm bored",
    }
];

var userPrompt = prompt("what is your name?");
var passwordPrompt = prompt("what is your password?");

function isuserValid(username,password){
    for(var i=0; i<database.length ;i++){
        if(database[i].username === username && database[i].password === password){
            return true;
        }
    }
    return false;
}

function signIn(user,pass){
    if(isuserValid(user,pass)){
        console.log(newsFeed);
    }
    else{
        alert("wrong username or password");
    }
}

signIn(userPrompt,passwordPrompt);