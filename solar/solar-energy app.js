
// app.js
function createProductCard(product) {
    return `
        <div class="product-card" onclick="showProduct(${product.id})">
             <div class="product-image">
                <img src="${product.mainImage}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-price">${product.price}</p>
            </div>
        </div>
    `;
}

function showProduct(id) {
    const product = products.find(p => p.id === id);
    const modal = document.getElementById('productModal');
    const modalContent = document.getElementById('modalContent');

    modalContent.innerHTML = `
        <div class="specs-container">
            <h2>${product.name}</h2>
            <p class="product-price">${product.price}</p>
            <div class="description">
                ${product.description}
            </div>
            <table class="specs-table">
                <tr>
                    <th>Power Output</th>
                    <td>${product.power}W</td>
                </tr>
                <tr>
                    <th>Efficiency</th>
                    <td>${product.efficiency}%</td>
                </tr>
                <tr>
                    <th>Warranty</th>
                    <td>${product.warranty}</td>
                </tr>
                <tr>
                    <th>Dimensions</th>
                    <td>${product.dimensions}</td>
                </tr>
                <tr>
                    <th>Weight</th>
                    <td>${product.weight}</td>
                </tr>
            </table>
        </div>
        <div class="product-gallery">
            ${product.images.map(img => `
                <img src="${img}" alt="${product.name}" class="gallery-image">
            `).join('')}
        </div>
    `;

    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('productModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('productModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Initialize products
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('productsGrid').innerHTML = products.map(createProductCard).join('');
});