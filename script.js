const productContainer=document.getElementById("products-container")
async function fetchProduct(){
    try {
        const responce=await fetch('https://fakestoreapi.com/products')
       
        if(!responce.ok){
            throw new Error("something went wrong");
        }
        const products=await responce.json();
        const loading=document.getElementById("loading")
        loading.style.display='none'
        displayProducts(products)
    } catch (error) {
        console.log(error);
    }
}

function displayProducts(products){

  products.forEach((product) => {
    const productCard=
    `<div class="col-md-4 col-lg-3">
      <div class="card d-flex justify-content-between px-3">
    <div>
    <img src="${product.image}" class="card-img-top" alt="...">
    </div>
    <div>
    <div class=""card-body>
      <h5 class="card-title">${product.title}</h5>
      <p class="text-secondary">${product.description.slice(0,100)}...</p>
      </div>
      </div>
    <div class="d-flex justify-content-between pb-3">
      <p class="card-text m-0 fw-bold">$${product.price}</p>
      <a href="product.html?id=${product.id}" class="btn btn-primary">View Details</a>
    </div>
    </div>
</div>`

    productContainer.innerHTML+=productCard;
  })
}

fetchProduct()
