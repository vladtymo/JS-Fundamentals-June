// -=-=-=-=-=-=-=- Working with Forms -=-=-=-=-=-=-=-

const form = document.forms.creationForm; // get form by name

const nameInput = form.elements.name;
const priceInput = form.elements.price;
const inStockCheckbox = form.elements.inStock;

class Product {
    static count = 0;

    constructor(name, price, inStock) {
        this.name = name;
        this.price = price;
        this.inStock = inStock;
        this.number = ++Product.count;
    }

    get stockBadge() {
        return this.inStock ?
            "<span class='badge text-bg-success'>In Stock</span>" :
            "<span class='badge text-bg-secondary'>Out Of Stock</span>";
    }

    addToTable(tableBody) {
        tableBody.innerHTML += `<tr>
                                    <th scope="row">${this.number}</th>
                                    <td>${this.name}</td>
                                    <td>${this.price}</td>
                                    <td>${this.stockBadge}</td>
                                </tr>`;
    }
};

form.onsubmit = (event) => {
    event.preventDefault(); // disable default behaviour

    // TODO: add validation

    // get product data from inputs
    const product = new Product(nameInput.value, priceInput.value, inStockCheckbox.checked);

    // we can access the element by ID
    product.addToTable(productTableBody);
};

clearAllBtn.onclick = () => {
    // clear all table records
    productTableBody.innerHTML = '';
};