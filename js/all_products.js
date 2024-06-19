// open & close filter

var filter = document.querySelector(".filter");
function open_close_filter () {
    filter.classList.toggle("active");
}


fetch("js/items.json")
  .then((response) => response.json())
  .then((data) => {
    const products__dev = document.getElementById("products__dev");

    all_products_json = data;
    data.forEach((product) => {
      const old_price_pargraph = product.old_price
        ? `<div class="old__price">$${product.old_price}</div>`
        : "";

      const percent_disc_div = product.old_price
        ? `<span class="sale__present">%${Math.floor(
            ((product.old_price - product.price) / product.old_price) * 100
          )}</span>`
        : "";
      products__dev.innerHTML += `
                                <div class="product swiper-slide">
                        <div class="icons">
                            <span> <i onclick="addToCart(${product.id}, this)" class="fa-solid fa-cart-shopping"></i></span>
                            <span><i class="fa-solid fa-heart"></i></span>
                            <span><i class="fa-solid fa-share"></i></span>
                        </div>
                        ${percent_disc_div}
                        <span></span>
                        <div class="img__product">
                            <img src="${product.img}" alt="">
                            <img class="img__hover" src="${product.img_hover}" alt="">
                        </div>
                        <h3 class="name__product"> <a href="item.html">${product.name}</a> </h3>
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <div class="price">
                            <p><span>$${product.price}</span></p>
                          ${old_price_pargraph}
                        </div>
                    </div>

        `;
    });
  });
