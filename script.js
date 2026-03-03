const products = [
  {name:"Nike Air Force 1", brand:"Nike", price:75000, img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff"},
  {name:"Nike Air Max 90", brand:"Nike", price:85000, img:"https://images.unsplash.com/photo-1608231387042-66d1773070a5"},
  {name:"Adidas Ultraboost", brand:"Adidas", price:90000, img:"https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a"},
  {name:"Air Jordan 1", brand:"Jordan", price:110000, img:"https://images.unsplash.com/photo-1584735175315-9d5df23be620"},
  {name:"Puma RS-X", brand:"Puma", price:65000, img:"https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb"},
  {name:"New Balance 550", brand:"New Balance", price:80000, img:"https://images.unsplash.com/photo-1606813907291-d86efa9b94db"}
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let delivery = 3000;

function displayProducts(list){
  const container = document.getElementById("product-list");
  container.innerHTML="";
  list.forEach(p=>{
    container.innerHTML += `
      <div class="card">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p class="price">${p.price.toLocaleString()} FCFA</p>
        <button onclick="addToCart('${p.name}',${p.price})">Ajouter</button>
      </div>
    `;
  });
}

function addToCart(name,price){
  cart.push({name,price});
  saveCart();
  updateCart();
}

function removeItem(i){
  cart.splice(i,1);
  saveCart();
  updateCart();
}

function updateCart(){
  let total = cart.reduce((sum,item)=>sum+item.price,0);
  document.getElementById("cart-count").innerText=cart.length;
  document.getElementById("cart-total").innerText=total.toLocaleString();

  let list=document.getElementById("cart-items");
  list.innerHTML="";
  cart.forEach((item,i)=>{
    list.innerHTML+=`
      <li>${item.name} - ${item.price.toLocaleString()} FCFA
      <button onclick="removeItem(${i})">❌</button></li>
    `;
  });

  document.getElementById("final-total").innerText=(total+delivery).toLocaleString();
}

function saveCart(){
  localStorage.setItem("cart",JSON.stringify(cart));
}

function filterBrand(brand){
  if(brand==="all") displayProducts(products);
  else displayProducts(products.filter(p=>p.brand===brand));
}

function searchProduct(){
  let value=document.getElementById("search").value.toLowerCase();
  displayProducts(products.filter(p=>p.name.toLowerCase().includes(value)));
}

function checkout(method){
  alert("Paiement simulé via " + method + " réussi ✅");
  cart=[];
  saveCart();
  updateCart();
}

displayProducts(products);
updateCart();