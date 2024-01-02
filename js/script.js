const url = "http://ca-cms.local/wp-json/wc/store/products";
const productsContainer = document.querySelector(".products");

productsContainer.innerHTML = `<div class="loader"></div>`;

async function getProducts() {
  try {
    const response = await fetch(url);
    const getResults = await response.json();
    createProducts(getResults);
  } catch (error) {
    console.log("Error occured, can't fetch products!");
  }
}


getProducts();

function createProducts(products) {
  products.forEach(function (product) {
    console.log(products)
    productsContainer.innerHTML += 
    `<a href="product.html?id=${product.id}" class="product-card">
        <h3>${product.name}</h3>
        <img src="${product.images[0].src}" alt="${product.images[0].alt}" />
        <p>${product.prices.price/100} ${product.prices.currency_symbol}</p>
    </a>`;
  });
}

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
