/*var age =  Number(prompt("Enter your age"));

if (age<18){
    alert("Sorry, you are too young to drive this car. Powering off");
}
else if(age === 18){
    alert("Congratulations on your first year of driving. Enjoy the ride!");
}
else{
    alert("Powering On. Enjoy the ride!")
}*/

function checkDriverAge(){
    var age =  Number(prompt("Enter your age"));
 if (age<18){
    alert("Sorry, you are too young to drive this car. Powering off");
 } else if(age === 18){
    alert("Congratulations on your first year of driving. Enjoy the ride!");
 } else{
    alert("Powering On. Enjoy the ride!")
 }
}
 var checkDriverAge2 = function(age){
    if (age<18){
       return "Sorry, you are too young to drive this car. Powering off";
    } else if(age === 18){
       return "Congratulations on your first year of driving. Enjoy the ride!";
    } else{
       return "Powering On. Enjoy the ride!";
    }
 }

