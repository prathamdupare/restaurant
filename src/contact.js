const contactDetails = [
    {
        label: "Address",
        info: "123 Main Street, Cityville"
    },
    {
        label: "Phone",
        info: "+123-456-7890"
    },
    {
        label: "Email",
        info: "info@culinaryhaven.com"
    }
];

export function createContact() {
    const content = document.getElementById("content");

    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact");

    for (const detail of contactDetails) {
        const contactItem = document.createElement("div");
        contactItem.classList.add("contact-item");

        const itemLabel = document.createElement("h2");
        itemLabel.textContent = detail.label;

        const itemInfo = document.createElement("p");
        itemInfo.textContent = detail.info;

        contactItem.appendChild(itemLabel);
        contactItem.appendChild(itemInfo);

        contactContainer.appendChild(contactItem);
    }

    const home = document.querySelector(".home");
    if (home) {
        home.style.display = "none";
    }

    content.innerHTML = '';
    content.appendChild(contactContainer);
}
