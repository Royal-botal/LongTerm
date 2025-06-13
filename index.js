// index.js
const products = [
    { id: 1, name: "Battery", image: "images/battery.jpeg" },
    { id: 2, name: "Drill", image: "images/drills.jpeg" },
    { id: 3, name: "Inverter", image: "images/inverters.jpeg" },
    { id: 4, name: "Motor", image: "images/motor.jpeg" },
    { id: 5, name: "Posho Mill", image: "images/Poshomill.jpeg" },
    { id: 6, name: "Power saws", image: "images/power saws.jpeg" },
    { id: 7, name: "Pressure washer", image: "images/pressure washer.jpeg" },
    { id: 8, name: "Screw Drivers", image: "images/screw drivers.jpeg" },
    { id: 9, name: "Solar inverter", image: "images/solar inverter.jpeg" },
    { id: 10, name: "Solar Pumps", image: "images/solar pumps.jpeg" },
    { id: 11, name: "Solars", image: "images/solar.jpeg" },
    { id: 12, name: "Water pumps", image: "images/waterpumps.jpeg" },
  ];
  
  const productsGrid = document.getElementById("products-grid");
  
  function displayProducts(products) {
    productsGrid.innerHTML = "";
    products.forEach(product => {
      const productCard = document.createElement("div");
      productCard.className = "product-card";
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h2>${product.name}</h2>
        <p>${product.price}</p>
      `;
      productsGrid.appendChild(productCard);
    });
  }
  
  document.getElementById("search-input").addEventListener("input", (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));
    displayProducts(filteredProducts);
  });
  
  displayProducts(products);
  