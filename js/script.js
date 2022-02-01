import data from "../data.js";

let daily = document.getElementById("daily");
let weekly = document.getElementById("weekly");
let monthly = document.getElementById("monthly");

let card_bottom_1 = document.getElementsByClassName("card-bottom-1");
let card_bottom_2 = document.getElementsByClassName("card-bottom-2");

daily.addEventListener("click", () => {
  weekly.classList.remove("active");
  monthly.classList.remove("active");
  daily.classList.add("active");

  timeForCardBottom1("daily");
  timeForCardBottom2("Last Day - ", "daily");
});

weekly.addEventListener("click", () => {
  weekly.classList.add("active");
  monthly.classList.remove("active");
  daily.classList.remove("active");

  timeForCardBottom1("weekly");
  timeForCardBottom2("Last Week - ", "weekly");
});

monthly.addEventListener("click", () => {
  weekly.classList.remove("active");
  monthly.classList.add("active");
  daily.classList.remove("active");

  timeForCardBottom1("monthly");
  timeForCardBottom2("Last Month - ", "monthly");
});

const timeForCardBottom1 = (time) => {
  for (let i = 0; i < card_bottom_1.length; i++) {
    card_bottom_1[i].innerHTML = data[i].timeframes[time].current + "hrs";
  }
};

const timeForCardBottom2 = (day, time) => {
  for (let i = 0; i < card_bottom_2.length; i++) {
    card_bottom_2[i].innerHTML = day + data[i].timeframes[time].previous + "hrs";
  }
};
