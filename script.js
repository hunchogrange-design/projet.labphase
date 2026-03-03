let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;

  document.getElementById("cart-count").innerText = cart.length;
  document.getElementById("cart-total").innerText = total;

  updateCartDisplay();
}

function updateCartDisplay() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - ${item.price} €
      <button onclick="removeFromCart(${index})">❌</button>
    `;
    cartItems.appendChild(li);
  });
}

function removeFromCart(index) {
  total -= cart[index].price;
  cart.splice(index, 1);

  document.getElementById("cart-count").innerText = cart.length;
  document.getElementById("cart-total").innerText = total;

  updateCartDisplay();
}