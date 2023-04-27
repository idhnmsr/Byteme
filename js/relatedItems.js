
// const product1 = {
//     name: "Ram 16Gb",
//     description: "This 16 GB RAM Module",
//     imageURL: "images/ram-16gb.jpg",
//     style: "White / LED",
//     price: 20.50
// }

const relatedItems = [];

function displayProduct() {

    let display = "";

    for (let i = 0; i < relatedItems.length; i++) {

        display += `
        <div class="col my-5">
            <div class="card" style="width: 18rem;">
                <img class="py-3" src=${relatedItems[i].imageURL} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${relatedItems[i].name}</h5>
                    <p class="card-text py-3">${relatedItems[i].description}</p>
                </div>
            </div>
        </div>
    `
    }

    document.querySelector("#relrow").innerHTML = display;

}

function addProduct(n, d, i) {

    const relateditems = {
        name: n,
        description: d,
        imageURL: i,
        // options: options,
        // price: p
    }

    relatedItems.push(relateditems);

}
//The individial property values are sent in thought the argument 
addProduct("Corsair RGB - 16GB", "This is a Corsair RGB - 16GB. This is more descriptive text. ", "images/ram-16gb.jpg");
addProduct("Corsair RGB - 32GB", "This is a Corsair RGB - 16GB. This is more descriptive text. ", "images/ram-32gb.jpg");
addProduct("Corsair RGB - 16GB", "This is a Corsair RGB - 16GB. This is more descriptive text. ", "images/ram-16gb.jpg");
addProduct("Corsair RGB - 32GB", "This is a Corsair RGB - 16GB. This is more descriptive text. ", "images/ram-32gb.jpg");

displayProduct();