function currentDateTime(params) {
    let day;
let month;
let year;
let hour;
let minutes;
let seconds;
let AM;
let now = new Date();
year = now.getFullYear();
day = now.getDay();
date = now.getDate()
month = now.getMonth();
hour = now.getHours();
minutes = now.getMinutes();
seconds = now.getSeconds();
const dayName = getDayName(day)

let dateNumber = now.getDate()
let completeDate = dayName + ' ' + dateNumber + ' ' + month + ' ' + year;
let completeTime = hour + ':' + minutes + ':' + seconds

document.querySelector("#date").innerHTML = completeDate

document.querySelector("#time").innerHTML = completeTime
} 

currentDateTime()
setInterval(currentDateTime,1000)




function getDayName(day) {
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
return days[day];
}



