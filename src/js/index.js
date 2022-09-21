"use strict";

const accordion = document.querySelectorAll(".accordion");
const panelArrow = document.querySelectorAll(".panel-arrow");

accordion.forEach((accord) => {
    accord.addEventListener("click", () => {
        const accordionBody = accord.nextElementSibling;
        accord.classList.toggle("active");
        accord.classList.contains("active")
            ? (accordionBody.style.display = "block")
            : (accordionBody.style.display = "none");

        panelArrow.forEach((arrow) => {
            const accArrow = arrow.parentElement;
            accArrow.classList.contains("active")
                ? arrow.classList.add("active")
                : arrow.classList.remove("active");
        });
    });
});
