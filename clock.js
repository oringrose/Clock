function setDate() {

var sHand = document.getElementById("seconds");
var mHand = document.getElementById("minutes");
var hHand = document.getElementById("hours");

var now = new Date();

var seconds = now.getSeconds();
var minutes = now.getMinutes();
var hours   = now.getHours();


var sDegree = ((seconds / 60) * 360) + 90;
var mDegree = ((minutes / 60) * 360) + 90;
var hDegree = ((hours / 12) * 360) + 90;


sHand.style.transform = `rotate(${sDegree}deg)`;
mHand.style.transform = `rotate(${mDegree}deg)`;
hHand.style.transform = `rotate(${hDegree}deg)`;

console.log(seconds);
console.log("minutes are " + minutes);
console.log("hour is  " + hours);

}

setInterval(setDate, 1000);
