/*function loadAlert(){
    alert("Hello, world!");
}*/

function bigText(){
document.getElementById("textBox").style.fontSize="1.5em";
}

function radioChange(){
let text=document.getElementById("textBox");
if(document.getElementById("fancy").checked){
    text.style.fontWeight="bold";
    text.style.color="blue";
    text.style.textDecoration="underline";
}else {
    text.style.fontWeight="normal";
    text.style.color="black";
    text.style.textDecoration="none";
}
}

function toUpper(){
let text=document.getElementById("textBox");
text.value=text.value.toUpperCase();
let textSplit=text.value.split(".");
text.value=textSplit.join("-Moo");
}