"use strict";

const mainContainer = document.querySelector(".container");
const thankYouContainer = document.querySelector(".thank-you-container");
const form = document.querySelector(".form-rate");
const yourRating = document.querySelector(".rate");

function submitRating(e) {
  e.preventDefault();
  const rating = new FormData(e.target).get("rating");

  if (rating) {
    yourRating.innerText = rating;
    console.log(yourRating.innerText);
    mainContainer.classList.add("hidden");
    thankYouContainer.classList.remove("hidden");
  }
}

form.addEventListener("submit", submitRating);
