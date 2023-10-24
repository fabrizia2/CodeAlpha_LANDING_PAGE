// Sample data for menu items
const menuItems = [
    {
        name: "Spaghetti Bolognese",
        description: "Classic Italian pasta with rich meat sauce.",
        image: "./images/spaghetti.jpg",
        price: "$12.99",
    },
    {
        name: "Margarita Pizza",
        description: "Simple and delicious pizza with tomato and mozzarella.",
        image: "./images/pizza.jpg",
        price: "$12.99",
    },
    {
        name: "Fresh Fruit Salad",
        description: "A healthy mix of seasonal fruits.",
        image: "./images/fruit.jpg",
        price: "$12.99",
    },
    {
        name: "Iced Coffee",
        description: "Chilled coffee with ice cubes and cream.",
        image: "./images/coffee.jpg",
        price: "$12.99",
    },
];

// Function to add menu items to the menu section
function addMenuItemsToPage(menuItems) {
    const menuItemsContainer = document.querySelector(".menu-items");

    menuItems.forEach((item) => {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");

        const itemImage = document.createElement("img");
        itemImage.src = item.image;
        itemImage.alt = item.name;
        itemImage.classList.add("item-image");

        const itemDetails = document.createElement("div");
        itemDetails.classList.add("item-details");

        const itemName = document.createElement("h3");
        itemName.textContent = item.name;
        itemName.classList.add("item-name");

        const itemPrice = document.createElement("p");
        itemPrice.classList.add("price");
        itemPrice.textContent = item.price;

        const itemDescription = document.createElement("p");
        itemDescription.textContent = item.description;

        itemDetails.appendChild(itemName);
        itemDetails.appendChild(itemPrice);
        itemDetails.appendChild(itemDescription);

        menuItem.appendChild(itemImage);
        menuItem.appendChild(itemDetails);

        menuItemsContainer.appendChild(menuItem);
    });
}


// Add the menu items to the page
addMenuItemsToPage(menuItems);

// Open the menu modal when the "View Menu" button is clicked
const viewMenuButton = document.getElementById('viewMenuButton');
const menuModal = document.getElementById('menuModal');
const closeModal = document.getElementById('closeModal');

viewMenuButton.addEventListener('click', function() {
    menuModal.style.display = 'block';
});

// Close the menu modal when the close button is clicked
closeModal.addEventListener('click', function() {
    menuModal.style.display = 'none';
});

// Close the menu modal when the user clicks outside of it
window.addEventListener('click', function(event) {
    if (event.target === menuModal) {
        menuModal.style.display = 'none';
    }
});


document.querySelector('.cta-button').addEventListener('click', function() {
    var popup = document.getElementById('developer-popup');
    popup.style.display = 'block';
});

document.getElementById('closePopup').addEventListener('click', function() {
    var popup = document.getElementById('developer-popup');
    popup.style.display = 'none';
});

// Open the developer pop-up when the "Contact Us" button is clicked
document.getElementById('contactButton').addEventListener('click', function() {
    var popup = document.getElementById('developerPopup');
    popup.style.display = 'block';
});

// Close the developer pop-up when the close button is clicked
document.getElementById('closePopup').addEventListener('click', function() {
    var popup = document.getElementById('developerPopup');
    popup.style.display = 'none';
});

