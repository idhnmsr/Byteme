
const featureditems = [];

function displayProduct() {

    let display = "";

    for (let i = 0; i < featuredItem.length; i++) {

        display += `
        <div class="card" style="width: 18rem;">
        <img class="py-3" src=${featuredItem[i].imageURL} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${featuredItem[i].name}</h5>
        
          <p class="card-text py-3">${featuredItem[i].style}</p>
        </div>
      </div>
    `
    }

    document.querySelector("#row").innerHTML = display;


}

function addProduct(n, d, i, s, p) {

    const featuredItem = {
        name: n,
        description: d,
        imageURL: i,
        style: s,
        price: p
    }

    featureditems.push(featuredItem);

}
//The individial property valie are sent in thought the argument - later we need to refactor when we have the productform.html
addProduct("CPU Ryzen 7", "This is a Ryzen 7 CPU", "images/ram-16gb.jpg", "Flower print", 35);

addProduct("CPU Ryzen 9", "This is a Ryzen 9 CPU", "images/ram-16gb.jpg", "Flower print", 35);