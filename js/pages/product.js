const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");



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
    console.log(details);
    //create  .inner HTML
  }