function searchItems() {
    const input ```javascript
    = document.getElementById('searchBar').value.toLowerCase();
    const productList = document.getElementById('productList');
    const products = productList.getElementsByClassName('product-item');

    for (let i = 0; i < products.length; i++) {
        const productName = products[i].getElementsByTagName('h4')[0].innerText.toLowerCase();
        if (productName.includes(input)) {
            products[i].style.display = '';
        } else {
            products[i].style.display = 'none';
        }
    }
}

function searchItems() {
    const input = document.getElementById('searchBar').value.toLowerCase();
    const productList = document.getElementById('productList');
    const products = productList.getElementsByClassName('product-item');

    for (let i = 0; i < products.length; i++) {
        const productName = products[i].getElementsByTagName('h4')[0].innerText.toLowerCase();
        if (productName.includes(input)) {
            products[i].style.display = '';
        } else {
            products[i].style.display = 'none';
        }
    }
}
    function clearSearch() {
    document.getElementById('searchBar').value = '';
    searchItems(); // Call searchItems to reset the product list display
}
const products = [
    "Tool 1",
    "Tool 2",
    "Water Pump 1",
    "Water Pump 2",
    "Solar Panel 1",
    "Solar Panel 2"
];

function showSuggestions(value) {
    const suggestionsContainer = document.getElementById('suggestions');
    suggestionsContainer.innerHTML = ''; // Clear previous suggestions
    if (value.length === 0) {
        suggestionsContainer.style.display = 'none'; // Hide if input is empty
        return;
    }

    const filteredProducts = products.filter(product => 
        product.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredProducts.length > 0) {
        suggestionsContainer.style.display = 'block'; // Show suggestions
        filteredProducts.forEach(product => {
            const suggestionItem = document.createElement('div');
            suggestionItem.classList.add('suggestion-item');
            suggestionItem.textContent = product;
            suggestionItem.onclick = () => selectSuggestion(product);
            suggestionsContainer.appendChild(suggestionItem);
        });
    } else {
        suggestionsContainer.style.display = 'none'; // Hide if no matches
    }
}

function selectSuggestion(product) {
    document.getElementById('searchBar').value = product; // Set input value
    document.getElementById('suggestions').style.display = 'none'; // Hide suggestions
    searchItems(); // Trigger search
}   