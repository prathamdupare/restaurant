const menuItems = [
    {
        name: "Deluxe Burger",
        description: "A juicy beef patty with cheese, lettuce, tomato, and special sauce.",
        price: "$10.99"
    },
    {
        name: "Mediterranean Salad",
        description: "Fresh greens, tomatoes, cucumbers, olives, feta cheese, and balsamic dressing.",
        price: "$8.49"
    },
    {
        name: "Spaghetti Carbonara",
        description: "Pasta with creamy egg-based sauce, pancetta, and Parmesan cheese.",
        price: "$12.95"
    },
    {
        name: "Grilled Salmon",
        description: "Succulent grilled salmon fillet with lemon herb seasoning.",
        price: "$15.75"
    },
    {
        name: "Chocolate Lava Cake",
        description: "Warm chocolate cake with a gooey chocolate center, served with vanilla ice cream.",
        price: "$6.99"
    }
];




export function createMenu() {


    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu");

    for (const item of menuItems) {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");

        const itemName = document.createElement("h2");
        itemName.textContent = item.name;

        const itemDescription = document.createElement("p");
        itemDescription.textContent = item.description;

        const itemPrice = document.createElement("span");
        itemPrice.classList.add("price");
        itemPrice.textContent = item.price;

        menuItem.appendChild(itemName);
        menuItem.appendChild(itemDescription);
        menuItem.appendChild(itemPrice);

        menuContainer.appendChild(menuItem);
    }

    const home = document.querySelector(".home");
    if (home) {
        home.style.display = "none";
    }

    return menuContainer;
}

// Assuming you have an element with the id "menu" where you want to display the menu
// const content = document.getElementById("content");
// content.appendChild(createMenu());
