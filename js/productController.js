/* 
Product controller will perform action to the products to be displayed

(1) Display all products to be retrieved from the back-end.
(2) Add product to the product list (send the new product to the back-end)
---edit an existing product details
---remove an existing products
*/

//(1) Hardcode 5 product item - replace it later to retrieve from back-end
//Product details: name, description, img url, style, price
//image URL : http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif

//(1) Create the objects for the Products

const product1 = {
    name: "Ram 16Gb",
    description: "This 16 GB RAM Module",
    imageURL: "images/ram-16gb.jpg",
    style: "White / LED",
    price: 20.50
}

const product2 = {
    name: "Ram 32Gb",
    description: "This 32 GB RAM Module",
    imageURL: "images/ram-32gb.jpg",
    style: "Black / Plain",
    price: 40.00
}

const product3 = {
    name: "Case: NR200 (Black)",
    description: "Last ITX Case NR200",
    imageURL: "images/case-nr200black.jpg",
    style: "Black",
    price: 40.00
}

const product4 = {
    name: "Case: NR200 (White)",
    description: "Last ITX Case NR200",
    imageURL: "images/case-nr200white.jpg",
    style: "White",
    price: 40.00
}

//(2) Push the product objects into an array
const productList = [];
// productList.push(product1, product2, product3, product4);


// function displayDetails(index) {
//     // When user clicks on any "More" button, the details of the selected product will be displayed
//     document.querySelector("#modalName").innerHTML = productList[index].name;
//     document.querySelector("#modalStyle").innerHTML = productList[index].style;
//     document.querySelector("#modalPrice").innerHTML = productList[index].price;
//     document.querySelector("#modalImg").src = productList[index].imageURL;

// }

//(3) Display all products when user launch the product.html page
//const displayProduct = () => {
function displayProduct() {

    let display = "";

    for (let i = 0; i < productList.length; i++) {

        display += `
            <div class="col-lg-3">
                  <div class="card">
                      <img class="py-3" src=${productList[i].imageURL} class="card-img-top"
                          alt="image" >
                      <div class="card-body">
                          <h5 class="card-title">${productList[i].name}</h5>
                          <h5 class="price">$${productList[i].price}</h5>
                          <p class="card-text py-3">${productList[i].style}</p>
                          <a href="product.html" class="btn btn-primary">View Product</a>
                      </div>
                  </div>
            </div>   
            `
    }

    document.querySelector("#row").innerHTML = display;




} //End of display product function

//(4) Add product to the product ilst when user clicks on the submit button from the productform.html
function addProduct(n, d, i, s, p) {

    // The parameter will be sent in from another function.
    /*
    1) Construct/Create the object
        property: value
    */

    const productItem = {
        name: n,
        description: d,
        imageURL: i,
        style: s,
        price: p
    }

    productList.push(productItem);

}
//The individial property valie are sent in thought the argument - later we need to refactor when we have the productform.html
addProduct("CPU Ryzen 7", "This is a Ryzen 7 CPU", "images/ram-16gb.jpg", "Descriptive text", 35);

addProduct("CPU Ryzen 9", "This is a Ryzen 9 CPU", "images/ram-16gb.jpg", "Descriptive text", 35);

addProduct("CPU Ryzen 9", "This is a Ryzen 9 CPU", "images/ram-16gb.jpg", "Descriptive text", 35);

addProduct("CPU Ryzen 9", "This is a Ryzen 9 CPU", "images/ram-16gb.jpg", "Descriptive text", 35);

addProduct("CPU Ryzen 9", "This is a Ryzen 9 CPU", "images/ram-16gb.jpg", "Descriptive text", 35);

addProduct("CPU Ryzen 9", "This is a Ryzen 9 CPU", "images/ram-16gb.jpg", "Descriptive text", 35);

addProduct("CPU Ryzen 9", "This is a Ryzen 9 CPU", "images/ram-16gb.jpg", "Descriptive text", 35);

addProduct("CPU Ryzen 7", "This is a Ryzen 7 CPU", "images/ram-16gb.jpg", "Descriptive text", 35);

addProduct("CPU Ryzen 9", "This is a Ryzen 9 CPU", "images/ram-16gb.jpg", "Descriptive text", 35);

addProduct("CPU Ryzen 9", "This is a Ryzen 9 CPU", "images/ram-16gb.jpg", "Descriptive text", 35);

addProduct("CPU Ryzen 9", "This is a Ryzen 9 CPU", "images/ram-16gb.jpg", "Descriptive text", 35);

addProduct("CPU Ryzen 9", "This is a Ryzen 9 CPU", "images/ram-16gb.jpg", "Descriptive text", 35);

addProduct("CPU Ryzen 9", "This is a Ryzen 9 CPU", "images/ram-16gb.jpg", "Descriptive text", 35);

addProduct("CPU Ryzen 9", "This is a Ryzen 9 CPU", "images/ram-16gb.jpg", "Descriptive text", 35);

displayProduct();
