

function setDate() {

var sHand = document.getElementById("seconds");
var mHand = document.getElementById("minutes");
var hHand = document.getElementById("hours");
var wholeHand = document.getElementsByClassName("hand")[0];

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
//console.log("minutes are " + minutes);
//console.log("hour is  " + hours);



if (seconds == 0) {
wholeHand.classList.add("playing");

}
else {
wholeHand.classList.remove("playing");
}
/*
if (hours>=6 && hours<=22) {
DAY TIME
}

else {
NIGHT TIME
}
*/


}

function dayOrNight() {

var backgroundCol = document.getElementsByTagName("body")[0];
var sun = document.getElementsByClassName("svg-sun")[0];
var clouds = document.getElementsByClassName("clouds-container")[0];

var today = new Date();
var todayHours = today.getHours();


console.log(todayHours);

if (todayHours >= 7 && todayHours <= 22) {

sun.style.display = "absolute";
backgroundCol.style.background = "#2980b9";
clouds.style.display = "absolute";

} else {

sun.style.display = "none";
backgroundCol.style.background = "black";
clouds.style.display = "none";

}

}




function dateToday() {


var myDate = new Date();
console.log(myDate);

var currentDate = new Date();
var cDate = document.getElementById("current-date");

var dateTime = currentDate.getDate() + "/"
             + (currentDate.getMonth()+1) + "/"
             + currentDate.getFullYear();



cDate.textContent = "The Date is " + dateTime;
}
dayOrNight();
dateToday();
setInterval(setDate, 1000);
