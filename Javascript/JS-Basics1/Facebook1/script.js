var database = [
    {
        username: "Jelly",
        password: "123",
    }
]


var newsFeed = [
    {
        name: "Bobby",
        timeline: "i'm tired",
    },
    {
        name: "Sally",
        timeline: "Enjoying!"
    }
]

var userPrompt = prompt("what's your name?");
var passwordPrompt = prompt("what's your password?");

function signIn(user,pass){
    if(database[0].username === userPrompt && database[0].password === passwordPrompt){
        console.log(newsFeed);
    }
    else{
        alert("wrong username or password");
    }
}

signIn(userPrompt,passwordPrompt);