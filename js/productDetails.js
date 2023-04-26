
// const product1 = {
//     name: "Ram 16Gb",
//     description: "This 16 GB RAM Module",
//     imageURL: "images/ram-16gb.jpg",
//     style: "White / LED",
//     price: 20.50
// }

const productItem = [];

function displayProduct() {

    let display = "";

    for (let i = 0; i < productItem.length; i++) {

        display += `
        <div class="col left-col my-5">
            <div id="carouselIndicators" class="carousel slide">
                <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="0" class="active"
              aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="1"
              aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="2"
              aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
            <div class="carousel-item active">
              <img src=${productItem[i].img1} class="d-block w-100 image-fluid" alt="..." />
            </div>
            <div class="carousel-item">
              <img src=${productItem[i].img2} class="d-block w-100 image-fluid" alt="..." />
            </div>
            <div class="carousel-item">
              <img src=${productItem[i].img3} class="d-block w-100 image-fluid" alt = "..." />
            </div >
            </div >
             <button class="carousel-control-prev" type="button" data-bs-target="#carouselIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div >
        </div >
            <div class="col right-col my-5">
                <div class="container-fluid product-name">
                <!-- This is the h2 product name container -->
                <h2 class="py-3">${productItem[i].name}</h2>
            </div>

            <div class="container-fluid product-price-options">
                <div class="container-fluid text-center">
                    <div class="row">
               

                        <div class="col price my-4">
                            <h3>${productItem[i].price}</h3 >
                        </div >

                        <div class="options col my-3">

                            <div class="btn-group">
                                <select id="options" required>
                                    <option value="options">Options</option>
                                    ${productItem[i].options.map(option => `<option value="${option}">${option}</option>`).join('')}
                                </select>
                            </div>
                        </div>

                        <div class="container-fluid product-description">
                            <p class="py-3">
                            ${productItem[i].description}
                            </p>
                        </div>

                        <div class="container-fluid product-atc-btn mt-4">
                            <button type="button" class="btn">
                                <a href="#">Add to Cart</a>
                            </button>
                        </div>
                    </div >
                </div >
            </div >
        </div >
    `
    }

    document.querySelector("#row").innerHTML = display;

}

function addProduct(name, desc, img1, img2, img3, options, p) {

    const productitems = {
        name: name,
        description: desc,
        img1: img1,
        img2: img2,
        img3: img3,
        options: options,
        price: p
    }

    productItem.push(productitems);

}
//The individial property values are sent in thought the argument 
addProduct("Corsair RGB - 16GB", "This is a Corsair RGB - 16GB", "images/ram-16gb.jpg", "images/ram-16gb.jpg", "images/ram-16gb.jpg", ["RAM", "CPU", "GPU"], 239);

displayProduct();