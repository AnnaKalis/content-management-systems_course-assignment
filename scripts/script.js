import { displayError } from "./displayerror.js";

const url = "https://www.annakalis.be/wp-json/wc/store/products";
const productsContainer = document.querySelector(".products");

productsContainer.innerHTML = `<div class="loader"></div>`;

async function getProducts() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Network response was not ok (status: ${response.status})`);
    }

    const getResults = await response.json();
    createProducts(getResults);
  } catch (error) {
    productsContainer.innerHTML = displayError("An error occured when uploading the products from the server!"
    );
  }
}

getProducts();

function createProducts(products) {
  productsContainer.innerHTML = "";
  products.forEach(function (product) {
    productsContainer.innerHTML += `<a href="product.html?id=${product.id}" class="product-card">
        <h3>${product.name}</h3>
        <img src="${product.images[0].src}" alt="${product.images[0].alt}" />
        <p>${product.prices.price / 100} ${product.prices.currency_symbol}</p>
    </a>`;
  });
}
