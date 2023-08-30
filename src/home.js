export function createHome() {

    const content = document.getElementById("content");

    const restaurantName = document.createElement("h1");
    // restaurantName.classList.add("restaurant-name")
    restaurantName.textContent = "Culinary Haven";
    content.appendChild(restaurantName);

    const home = document.createElement("div");
    home.classList.add("home");

    const chefImage = document.createElement("img");
    chefImage.classList.add("chef-image");
    chefImage.src = "chef.jpg";
    chefImage.alt = "Chef";

    const aboutRes = document.createElement("div");
    aboutRes.classList.add("about");
    aboutRes.textContent = "Welcome to 'Culinary Haven,' where exquisite flavors and unmatched hospitality come together to create a dining experience like no other. Nestled in the heart of the city, our restaurant offers a symphony of tastes that pay homage to both local traditions and global culinary artistry. From the carefully curated menu that celebrates farm-to-table ingredients to the warm ambiance that envelops you as you step in, 'Culinary Haven' is your destination for savoring moments of culinary delight, shared among friends and family."

    const aboutRes2 = document.createElement("div");
    aboutRes2.classList.add("about2");
    aboutRes2.textContent = "Order Online Now!"
    

    home.appendChild(aboutRes);
    home.appendChild(chefImage);
    home.appendChild(aboutRes2);
    

    content.appendChild(home)

    return home;
}

