// script.js

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get a reference to the button element
    const myButton = document.getElementById('my-button');

    // Add a click event listener
    myButton.addEventListener('click', function () {
        alert('Button clicked!'); // Show an alert when the button is clicked
    });
});
