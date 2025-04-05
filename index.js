// Sample product data
const products = [
    { name: "Tool 1", price: "$50", description: "High-quality tool for various tasks.", status: "In Stock", image: "images/tool1.jpg" },
    { name: "Tool 2", price: "$30", description: "Durable and reliable tool.", status: "Out of Stock", image: "images/tool2.jpg" },
    { name: "Water Pump 1", price: "$150", description: "Efficient water pump for residential use.", status: "In Stock", image: "images/pump1.jpg" },
    { name: "Water Pump 2", price: "$200", description: "Heavy-duty pump suitable for agricultural needs.", status: "In Stock", image: "images/pump2.jpg" },
    { name: "Solar Panel 1", price: "$300", description: "High-efficiency solar panel.", status: "In Stock", image: "images/solar1.jpg" },
    { name: "Solar Panel 2", price: "$350", description: "Durable solar panel for long-term use.", status: "In Stock", image: "images/solar2.jpg" }
];

// Function to display all products
function displayAllProducts() {
    const productList = document.getElementById('productList');
    productList.innerHTML = ''; // Clear the current product list

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h4>${product.name}</h4>
            <p>Price: ${product.price}</p>
            <p>Description: ${product.description}</p>
            <p>Status: ${product.status}</p>
        `;
        productList.appendChild(productItem);
    });
}

// Function to search for items
function searchItems() {
    const input = document.getElementById('searchBar').value.toLowerCase();
    const productList = document.getElementById('productList');
    const loadingIndicator = document.getElementById('loadingIndicator');
    
    loadingIndicator.style.display = 'block'; // Show loading indicator
    productList.innerHTML = ''; // Clear the current product list

    // Simulate a delay for loading (for demonstration purposes)
    setTimeout(() => {
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(input));

        if (filteredProducts.length > 0) {
            filteredProducts.forEach(product => {
                const productItem = document.createElement('div');
                productItem.classList.add('product-item');
                productItem.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h4>${product.name}</h4>
                    <p>Price: ${product.price}</p>
                    <p>Description: ${product.description}</p>
                    <p>Status: ${product.status}</p>
                `;
                productList.appendChild(productItem);
            });
        } else {
            productList.innerHTML = '<p>No products found.</p>'; // Message if no products match
        }
        loadingIndicator.style.display = 'none'; // Hide loading indicator
    }, 500); // Simulated delay of 500ms
}

// Function to clear the search
function clearSearch() {
    document.getElementById('searchBar').value = ''; // Clear the input field
    displayAllProducts(); // Reset the product list to show all products
}

// Function to show suggestions based on input
function showSuggestions(value) {
    const suggestionsContainer = document.getElementById('suggestions');
    suggestionsContainer.innerHTML = ''; // Clear previous suggestions
    if (value.length === 0) {
        suggestionsContainer.style.display = 'none'; // Hide if input is empty
        return;
    }

    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredProducts.length > 0) {
        suggestionsContainer.style.display = 'block'; // Show suggestions
        filteredProducts.forEach(product => {
            const suggestionItem = document.createElement('div');
            suggestionItem.classList.add('suggestion-item');
            suggestionItem.textContent = product.name;
            suggestionItem.onclick = () => selectSuggestion(product.name);
            suggestionsContainer.appendChild(suggestionItem);
        });
    } else {
        suggestionsContainer.style.display = 'none'; // Hide if no matches
    }
}

// Function to select a suggestion
function selectSuggestion(productName) {
    document.getElementById('searchBar').value = productName; // Set input value
    document.getElementById('suggestions').style.display = 'none'; // Hide suggestions
    searchItems(); // Trigger search
}

// Display all products on page load
window.onload = displayAllProducts;