
// app.js
/* Add these functions to app.js */
let currentImageIndex = 0;
let currentProduct = null;

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


function showZoomImage(productId, imageIndex) {
    currentProduct = products.find(p => p.id === productId);
    currentImageIndex = imageIndex;
    const zoomModal = document.getElementById('zoomModal');
    const zoomImage = document.getElementById('zoomImage');
    
    zoomImage.src = currentProduct.detailImages[currentImageIndex];
    zoomImage.alt = currentProduct.name;
    zoomModal.style.display = 'flex';
}

function closeZoom() {
    document.getElementById('zoomModal').style.display = 'none';
}

function nextImage() {
    if (currentProduct) {
        currentImageIndex = (currentImageIndex + 1) % currentProduct.detailImages.length;
        document.getElementById('zoomImage').src = currentProduct.detailImages[currentImageIndex];
    }
}

function prevImage() {
    if (currentProduct) {
        currentImageIndex = (currentImageIndex - 1 + currentProduct.detailImages.length) % currentProduct.detailImages.length;
        document.getElementById('zoomImage').src = currentProduct.detailImages[currentImageIndex];
    }
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
                    <th>Motor Power</th>
                    <td>${product.Motor_power}W</td>
                </tr>
                <tr>
                    <th>Max Speed</th>
                    <td>${product.Max_Speed}km/h</td>
                </tr>
                <tr>
                    <th>Battery</th>
                    <td>${product.Battery}</td>
                </tr>
                <tr>
                    <th>Range</th>
                    <td>${product.Range}</td>
                </tr>
                <tr>
                    <th>Weight</th>
                    <td>${product.Controller}</td>
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

// Close zoom modal when clicking outside
window.onclick = function(event) {
    const zoomModal = document.getElementById('zoomModal');
    const modal = document.getElementById('productModal');
    
    if (event.target === zoomModal) {
        closeZoom();
    }
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Initialize products
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('productsGrid').innerHTML = products.map(createProductCard).join('');
});


