const api = 'https://dummyjson.com/products';
const list = document.getElementById('product-list');
const moreBtn = document.getElementById('more-btn');

const pagiantion = {
    limit: 3,
    skip: 0,
    total: null
};

function getProducts() {

    fetch(api + `?skip=${pagiantion.skip}&limit=${pagiantion.limit}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);

            // go to the next page
            pagiantion.skip += pagiantion.limit;

            data.products.forEach(i => {
                addProduct(i);
            });

        });
}

function addProduct(item) {
    list.innerHTML += `<div class="col">
                            <div class="card h-100" style="width: 18rem;">
                                <img src="${item.thumbnail}" height=150 class="card-img-top" alt="Product Image">
                                <div class="card-body">
                                    <h5 class="card-title">${item.title}</h5>
                                    <p class="card-text">${item.price}$</p>
                                    <a href="#" class="btn btn-primary">Buy</a>
                                </div>
                            </div>
                        </div>`;
}

moreBtn.onclick = () => {
    getProducts();
}

// load first page
getProducts();