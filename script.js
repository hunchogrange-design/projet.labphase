const productsContainer = document.getElementById('products-container');
const searchInput = document.getElementById('search');

// Produits Lovable avec logos, images et prix
const products = [
    {
        name: "Air Jordan 1 Retro",
        brand: "Nike",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
        description: "La légendaire basket au design iconique.",
        price: "220€",
        image: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Patent-Black-White.jpg"
    },
    {
        name: "Air Max 90",
        brand: "Nike",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
        description: "Confort classique et style intemporel.",
        price: "150€",
        image: "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/air-max-90.jpg"
    },
    {
        name: "Ultraboost 22",
        brand: "Adidas",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
        description: "Confort et performance ultime pour vos courses.",
        price: "200€",
        image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/ultraboost-22.jpg"
    },
    {
        name: "Superstar",
        brand: "Adidas",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
        description: "Basket emblématique avec design classique.",
        price: "130€",
        image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/superstar.jpg"
    },
    {
        name: "RS-X",
        brand: "Puma",
        logo: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Puma_logo.svg",
        description: "Design rétro et confort maximal.",
        price: "140€",
        image: "https://images.puma.com/rs-x.jpg"
    },
    {
        name: "Cali Sport",
        brand: "Puma",
        logo: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Puma_logo.svg",
        description: "Style lifestyle casual et moderne.",
        price: "120€",
        image: "https://images.puma.com/cali-sport.jpg"
    },
    {
        name: "990v5",
        brand: "New Balance",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2c/New_Balance_logo.svg",
        description: "Confort premium et look classique.",
        price: "180€",
        image: "https://nb.scene7.com/is/image/NB/m990gl5_nb_02_i?$pdpflexf2$&wid=440&hei=440"
    },
    {
        name: "574 Core",
        brand: "New Balance",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2c/New_Balance_logo.svg",
        description: "Style vintage et polyvalent pour tous les jours.",
        price: "110€",
        image: "https://nb.scene7.com/is/image/NB/ml574egl_nb_02_i?$pdpflexf2$&wid=440&hei=440"
    },
    {
        name: "Chuck Taylor All Star",
        brand: "Converse",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Converse_logo.svg",
        description: "Basket légendaire, incontournable depuis 1917.",
        price: "90€",
        image: "https://www.converse.com/on/demandware.static/-/Sites-master-catalog/default/dw3175d2a0/images/hi-res/Chuck-Taylor-All-Star-Hi-Black.jpg"
    },
    {
        name: "One Star",
        brand: "Converse",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Converse_logo.svg",
        description: "Style streetwear iconique.",
        price: "95€",
        image: "https://www.converse.com/on/demandware.static/-/Sites-master-catalog/default/dw6c5e98c2/images/hi-res/One-Star-Ox-Black.jpg"
    }
];

// Affichage des produits
function displayProducts(list) {
    productsContainer.innerHTML = '';
    list.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img class="brand-logo" src="${product.logo}" alt="${product.brand} logo">
            <img class="product-image" src="${product.image}" alt="${product.name}">
            <div class="info">
                <h2>${product.name}</h2>
                <p><strong>Marque:</strong> ${product.brand}</p>
                <p>${product.description}</p>
                <p class="price">${product.price}</p>
                <button>Ajouter au panier</button>
            </div>
        `;
        productsContainer.appendChild(card);
    });
}

// Recherche dynamique
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = products.filter(p => 
        p.name.toLowerCase().includes(term) || 
        p.brand.toLowerCase().includes(term)
    );
    displayProducts(filtered);
});

// Affichage initial
displayProducts(products);