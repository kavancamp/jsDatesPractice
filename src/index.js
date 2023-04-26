let now = new Date();
let date = now.getDate();
let hours = now.getHours();
let year = now.getFullYear();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
let month = months[now.getMonth()];

console.log(now.getDate());
console.log(now.getMilliseconds());

console.log(now.getDay());
console.log(now.getFullYear());
console.log(now.getMonth());

console.log(`Today is ${day}, ${month} ${date} ,${year}`);

function formatDate() {
  return `Today is ${day}, ${month} ${date} ,${year}`;
}
console.log(formatDate(new Date()));
