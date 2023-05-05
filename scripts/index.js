"use strict";

const numbers = document.querySelectorAll(".number");
const btnSubmit = document.querySelector(".btn-submit");
const mainContainer = document.querySelector(".container");
const thankYouContainer = document.querySelector(".thank-you-container");

let rating;

function checking(e) {
  numbers.forEach((num) => {
    console.log(num);
    num.dataset.chose = "false";
    num.style.backgroundColor = "hsl(213, 20%, 18%)";
    num.style.color = "hsl(216, 12%, 54%)";
  });
  e.target.dataset.chose = "true";
  rating = e.target.textContent;

  numbers.forEach((num) => {
    if (num.dataset.chose === "true") {
      num.style.backgroundColor = "hsl(25, 97%, 53%)";
      num.style.color = "white";
    }
  });
}

function submitting() {
  numbers.forEach((num) => {
    if (num.dataset.chose === "true") {
      const rate = document.querySelector(".chosen");

      rate.textContent = rating;
      mainContainer.classList.add("hidden");
      thankYouContainer.classList.remove("hidden");
    }
  });
}

numbers.forEach((number) => {
  number.addEventListener("click", checking);
});

btnSubmit.addEventListener("click", submitting);
