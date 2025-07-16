// index.js
const products = [
    { id: 1, name: "Battery", image: "images/battery.jpeg", description: "Reliable batteries for all your power needs." },
    { id: 2, name: "Drill", image: "images/drills.jpeg", description: "High-performance drills for professionals and DIYers." },
    { id: 3, name: "Inverter", image: "images/inverters.jpeg", description: "Efficient inverters for uninterrupted power supply." },
    { id: 4, name: "Motor", image: "images/motor.jpeg", description: "Durable motors for various applications." },
    { id: 5, name: "Posho Mill", image: "images/Poshomill.jpeg", description: "Quality posho mills for your milling needs." },
    { id: 6, name: "Power saws", image: "images/power saws.jpeg", description: "Powerful saws for precise cutting." },
    { id: 7, name: "Pressure washer", image: "images/pressure washer.jpeg", description: "Pressure washers for sparkling clean surfaces." },
    { id: 8, name: "Screw Drivers", image: "images/screw drivers.jpeg", description: "Versatile screwdrivers for every job." },
    { id: 9, name: "Solar inverter", image: "images/solar inverter.jpeg", description: "Solar inverters for green energy solutions." },
    { id: 10, name: "Solar Pumps", image: "images/solar pumps.jpeg", description: "Efficient solar pumps for water supply." },
    { id: 11, name: "Solars", image: "images/solar.jpeg", description: "Solar panels for sustainable power." },
    { id: 12, name: "Water pumps", image: "images/waterpumps.jpeg", description: "Reliable water pumps for all uses." },
    { id: 13, name: "Drill bits", image: "images/drill bits.jpeg", description: "Durable drill bits for every material." }
  ];

// List of all images in the images folder
const allImages = [
  "Batterts ch.jpeg",
  "battery.jpeg",
  "drill bits.jpeg",
  "drills.jpeg",
  "IMG-20250412-WA0001.jpg",
  "IMG-20250412-WA0002.jpg",
  "IMG-20250412-WA0003.jpg",
  "IMG-20250412-WA0004.jpg",
  "IMG-20250412-WA0007.jpg",
  "IMG-20250412-WA0008.jpg",
  "inverters.jpeg",
  "mini inverters.jpeg",
  "motor.jpeg",
  "Poshomill.jpeg",
  "power saws.jpeg",
  "pressure washer.jpeg",
  "pressure washers.jpeg",
  "screw drivers.jpeg",
  "solar inverter.jpeg",
  "solar pumps.jpeg",
  "solar.jpeg",
  "Tools.jpeg",
  "waterpumps.jpeg"
];

const productsGrid = document.getElementById("products-grid");

function displayProducts(products) {
  productsGrid.innerHTML = "";
  products.forEach(product => {
    const productCard = document.createElement("div");
    productCard.className = "product-card advert-card";
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="advert-image" />
      <h2 class="advert-title">${product.name}</h2>
      <p class="advert-desc">${product.description}</p>
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
// (Gallery section removed from JS. Images and descriptions will be managed in index.html)
  