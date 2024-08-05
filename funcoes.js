document.addEventListener('DOMContentLoaded', () => {
    const formContainer = document.getElementById('form-container');
    const listContainer = document.getElementById('list-container');
    const productForm = document.getElementById('product-form');
    const productList = document.getElementById('product-list');
    const newProductBtn = document.getElementById('new-product-btn');

    let products = [];

    productForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const productName = document.getElementById('productName').value;
        const productDescription = document.getElementById('productDescription').value;
        const productValue = parseFloat(document.getElementById('productValue').value);
        const available = document.querySelector('input[name="available"]:checked').value;

        const product = {
            name: productName,
            description: productDescription,
            value: productValue,
            available: available
        };

        products.push(product);
        products.sort((a, b) => a.value - b.value);

        renderProductList();

        formContainer.style.display = 'none';
        listContainer.style.display = 'block';
    });

    newProductBtn.addEventListener('click', () => {
        formContainer.style.display = 'block';
        listContainer.style.display = 'none';
        productForm.reset();
    });

    function renderProductList() {
        productList.innerHTML = '';
        products.forEach(product => {
            const row = document.createElement('tr');
            const nameCell = document.createElement('td');
            const valueCell = document.createElement('td');

            nameCell.textContent = product.name;
            valueCell.textContent = product.value.toFixed(2);

            row.appendChild(nameCell);
            row.appendChild(valueCell);
            productList.appendChild(row);
        });
    }
});
