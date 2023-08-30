console.log("DONE!");

import { initialPageLoad } from './pageLoad';
import { createMenu } from './menu';
import { createHome } from './home';
import { createContact } from './contact';

initialPageLoad();

const menuButton = document.querySelector(".menu-button")
const homeButton = document.querySelector(".home-button");
const contactButton = document.querySelector(".contact-button"); // Add this line
 // Add this line



menuButton.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default behavior
    const content = document.getElementById("content");
    content.innerHTML = ''; // Clear existing content
    content.appendChild(createMenu()); 
});

homeButton.addEventListener("click", function(event) { 
    event.preventDefault();
    const content = document.getElementById("content");
    content.innerHTML = '';
    content.appendChild(createHome());
});

contactButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    const content = document.getElementById("content");
    content.innerHTML = '';
    content.appendChild(createContact());
});
