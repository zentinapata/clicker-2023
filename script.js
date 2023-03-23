let score = 0;
let red = 0;
let green = 0;
let blue = 0;

let diametrs = 200;


function OnButtonClick(){
    score += 1;
    document.getElementById("score").innerHTML = score;

    red = getRandomInt(256);
    green = getRandomInt(256);
    blue = getRandomInt(256);

    let rgbCode = "rgb(" + red.toString() + "," + green.toString() + "," + blue.toString() + ")";

    document.getElementById("button").style.backgroundColor =  rgbCode;

    diametrs -= 5;

    document.getElementById("button").style.width = diametrs.toString() + "px";
    document.getElementById("button").style.height = diametrs.toString() + "px"; 

    if(diametrs <= 5){
        document.getElementById("score").innerHTML = "You won!";
    }

}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

