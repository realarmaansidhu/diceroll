var num1 = Math.random();
var num2 = Math.random();

num1 = Math.ceil(num1*6);
num2 = Math.ceil(num2*6);

var loc1 = "images/dice" + num1 + ".png";
var loc2 = "images/dice" + num2 + ".png";

document.querySelector(".img1").setAttribute("src", loc1);
document.querySelector(".img2").setAttribute("src", loc2);

if(num1 > num2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
}

else if(num1 < num2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins🚩";
}

else {
    document.querySelector("h1").innerHTML = "Its A Tie🎲";
}