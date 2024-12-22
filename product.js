const productContainer=document.getElementById("product-container")
const urlParams=new URLSearchParams(window.location.search)
const productId=urlParams.get("id")

async function productDetails(){
    try {
        const responce=await fetch(`https://fakestoreapi.com/products/${productId}`)
    if(!responce.ok){
        throw new Error("something went wrong");
    }
    const details= await responce.json();
    const loading=document.getElementById("loading")
        loading.style.display='none'
    displayProduct(details)
    } catch (error) {
        console.log(error);
    }
    
}
function displayProduct(details){
    const product=`<div class="col-md-6 product-image-container">
            <img src="${details.image}" class="card-img-top" alt="...">
          </div>
          <div class="col-md-6">
            <h2>${details.title}</h2>
            <p class="text-secondary">${details.category}</p>
            <p>${details.description}</p>
            <p class="text-primary fs-2 fw-semibold mb-1">$${details.price}</p>
            <button type="button" class="btn btn-success">Buy Now</button>
          </div>
    `
    productContainer.innerHTML=product;
}
productDetails()
