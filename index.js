randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1 - 6
randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1 - 6

var Player1 = "images/dice" + randomNumber1 + ".png";
var Player2 = "images/dice" + randomNumber2 + ".png";

document.getElementById("img1").setAttribute("src", Player1);
document.getElementById("img2").setAttribute("src", Player2);

if (randomNumber1 > randomNumber2) {
  document.getElementsByTagName("h1")[0].innerHTML = "Player 1 Wins🚩";
  console.log("P1");
} else if (randomNumber1 < randomNumber2) {
  document.getElementsByTagName("h1")[0].innerHTML = "Player 2 Wins🚩";
  console.log("P2");
} else {
  document.getElementsByTagName("h1")[0].innerHTML = "Draw";
  console.log("D");
}
