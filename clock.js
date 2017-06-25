

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
var myDate = new Date();
console.log(myDate);

var currentDate = new Date();
var cDate = document.getElementById("current-date");

var dateTime = currentDate.getDate() + "/"
             + (currentDate.getMonth()+1) + "/"
             + currentDate.getFullYear();

console.log(dateTime);

cDate.textContent = "The Date is " + dateTime;

setInterval(setDate, 1000);
