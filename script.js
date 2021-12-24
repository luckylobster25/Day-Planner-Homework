
setInterval(function(){
var currentDayel = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
$("#currentDay").text(currentDayel)
},1000);