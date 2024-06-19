function addToCart(id, btn) {
  product__cart.push(all_products_json[id]);
  btn.classList.add("active");
  saveCartToLocalStorage();
  getCartItems();
}

function saveCartToLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(product__cart));
}

document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("cart")) {
    product__cart = JSON.parse(localStorage.getItem("cart"));
    getCartItems();
  }
});

function remove_from_cart(index) {
  product__cart.splice(index, 1);
  saveCartToLocalStorage();
  getCartItems();
}
