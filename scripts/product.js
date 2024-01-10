import { displayError } from "./displayerror.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const productContainer = document.querySelector(".product-container");

productContainer.innerHTML = `<div class="loader"></div>`;

const url = "https://www.annakalis.be/wp-json/wc/store/products/" + id;

async function getProduct() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Network response was not ok (status: ${response.status})`);
    }

    const getResult = await response.json();
    createProduct(getResult);
  } catch (error) {
    productContainer.innerHTML = displayError("An error occured when uploading the product from the server!");
  }
}

getProduct();

function createProduct(details) {
    productContainer.innerHTML = "";
  productContainer.innerHTML += `<img src="${details.images[0].src}" alt="${details.images[0].alt}" />
        <div class="main-product-info">
            <h1>${details.name}</h1>
            <p>${details.prices.price / 100} ${details.prices.currency_symbol}</p>
            <button class="cta">Add to cart</button>
        </div>
        <div class="description">${details.description}</div>
    `;
}
