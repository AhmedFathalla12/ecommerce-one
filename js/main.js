// open & close cart

var cart = document.querySelector(".cart");

function openCart() {
  cart.classList.add("active");
}
function closeCart() {
  cart.classList.remove("active");
}

// open & close menu

var menu = document.getElementById("menu");

function openMenu() {
  menu.classList.add("active");
}
function closeMenu() {
  menu.classList.remove("active");
}

//change item image

let bigImage = document.getElementById("bigImage");

function changeItemImage(img) {
  bigImage.src = img;
}

/*
- add items in cart
*/
var all_products_json;

var items__in__cart = document.querySelector(".items__in__cart");
let product__cart = [];

function addToCart(id, btn) {
  product__cart.push(all_products_json[id]);
  btn.classList.add("active");

  // console.log(id);
  // console.log(btn);
  // console.log(product__cart);

  getCartItems();
}

let count__item = document.querySelector(".count__item");
let count_item_head = document.querySelector(".count_item_head");
let price__cart__total = document.querySelector(".price__cart__total");
let price__cart__head = document.querySelector(".price__cart__head");

function getCartItems() {
  let total_price = 0;
  let items_c = "";
  for (let i = 0; i < product__cart.length; i++) {
    items_c += `

      <div class="items__cart">
                <img src="${product__cart[i].img}" alt="">
                <div class="contnet">
                    <h4>${product__cart[i].name}</h4>
                    <p class="price__cart">$${product__cart[i].price}</p>
                </div>
                <button onclick="remove_from_cart(${i})" class="delete__item"><i class="fa-solid fa-trash-can"></i></button>
            </div>
    
    `;

    total_price += product__cart[i].price;
  }
  items__in__cart.innerHTML = items_c;

  price__cart__head.innerHTML = "$" + total_price;
  count__item.innerHTML = product__cart.length;

  count_item_head.innerHTML = `(${product__cart.length} item ic cart)`;
  price__cart__total.innerHTML = "$" + total_price;
}

function remove_from_cart(index) {
  product__cart.splice(index, 1);
  getCartItems();

  let addToCartButtons = document.querySelectorAll(".fa-cart-shopping");
  for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].classList.remove("active");

    product__cart.forEach((product) => {
      if (product.id == i) {
        addToCartButtons[i].classList.add("active");
      }
    });
  }
}

// back_to_top

let back_to_top = document.querySelector(".back_to_top");
back_to_top.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
