const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const productContainer = document.querySelector(".product-container")

const url = "http://ca-cms.local/wp-json/wc/store/products/" + id;

async function getProduct() {
    try {
      const response = await fetch(url);
      const getResult = await response.json();
      createProduct(getResult);
    } catch (error) {
      console.log("Error occured, can't fetch products!");
    }
  }

  getProduct();


  function createProduct (details) {
    productContainer.innerHTML += 
    `<img src="${details.images[0].src}" alt="${details.images[0].alt}" />
        <div class="main-product-info">
            <h1>${details.name}</h1>
            <p>${details.prices.price/100} ${details.prices.currency_symbol}</p>
            <button class="cta">Add to cart</button>
        </div>
        <div class="description"><p>${details.description}</p></div>
    `
  }