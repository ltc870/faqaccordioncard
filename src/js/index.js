"use strict";

const accordion = document.querySelectorAll("#accordion");
const panel = document.querySelectorAll("#panel");
console.log(accordion);
console.log(panel);

accordion.forEach((accordion) => {
    accordion.addEventListener("click", () => {
        accordion.classList.toggle("active");
    });
});
