"use strict";

// Declaring constant variables to store references to the elements
// that will be updated by your code.
const yearElement = document.getElementById("year");
const resolutionElement = document.getElementById("resolution")
const willMeetResolutionElement = document.getElementById("will-meet-resolution")
const submissionBtn = document.getElementById("submission-btn")

// Declare your variables here.
const resolution = "Get back to the gym, stop wasting the membership and money!";
const currentYear = "2024";
const willMeetResolution = "2026"

function updateYear() {
    // Update this function
    yearElement.textContent = currentYear;
}

function updateResolution() {
    // Update this function 
    resolutionElement.textContent = resolution;
}

function updateWillMeetResolution() {
    // Update this function
    willMeetResolutionElement.textContent = willMeetResolution;
}

function render() {
    // Update this function
    updateYear();
    updateResolution();
    updateWillMeetResolution();
}

submissionBtn.addEventListener("click", function () {
    // Update this function
    render();
})
