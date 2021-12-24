
setInterval(function(){
var currentDayel = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
$("#currentDay").text(currentDayel)
},1000);

var nineam = document.querySelector("#nineam")

function save1(){
    localStorage.setItem("save1",nineam.value);
}