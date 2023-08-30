export function createLayout() {


    const top = document.getElementById("top");

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    top.appendChild(buttonContainer);

    const homeButton = document.createElement("button");
    homeButton.textContent = "HOME"
    homeButton.classList.add("button");
    homeButton.classList.add("home-button");
    buttonContainer.appendChild(homeButton);

    const menuButton = document.createElement("button");
    menuButton.textContent = "MENU"
    menuButton.classList.add("button")
    menuButton.classList.add("menu-button");
    buttonContainer.appendChild(menuButton);

    const contactButton = document.createElement("button");
    contactButton.textContent = "CONTACT"
    contactButton.classList.add("button");
    contactButton.classList.add("contact-button");
    buttonContainer.appendChild(contactButton);
}


