let cart = []; 

function addToCart(productName, productPrice, productImage) {
  const product = { name: productName, price: productPrice, image: productImage };

  cart.push(product);

  updateCart();
}

function updateCart() {
  let cartHTML = '<ul>';
  let total = 0;

  cart.forEach((product, index) => {
    cartHTML += `
      <li class="d-flex justify-content-between align-items-center">
        <img src="${product.image}" alt="${product.name}" style="width: 50px; height: 50px;">
        <span>${product.name} - $${product.price.toFixed(2)}</span>
        <button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">Remove</button>
      </li>
    `;
    total += product.price;
  });

  cartHTML += '</ul>';
  document.getElementById('cart').innerHTML = cartHTML;
  document.getElementById('total').innerText = total.toFixed(2); 
}

function removeFromCart(index) {
  cart.splice(index, 1);

  updateCart();
}

function checkout() {
  if (cart.length > 0) {
    alert('Thank you for your purchase!');
    cart = []; 
    updateCart(); 
  } else {
    alert('Your cart is empty!');
  }
}
