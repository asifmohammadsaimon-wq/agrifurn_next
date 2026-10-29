"use client";

import { useEffect } from "react";

const home = `
    <header class="site-header">
      <a class="logo" href="#top" aria-label="Agrifurn home">Agrifurn</a>
      <nav class="nav" aria-label="Main navigation">
        <a href="#furniture"><b>Furniture</b></a>
        <a href="#shop"><b>Shop</b></a>
        <a href="/about-us"><b>About Us</b></a>
        <a href="/contact"><b>Contact</b></a>
      </nav>
      <div class="header-actions">
        <button class="bag-button" type="button" aria-label="Shopping bag">🛒<b id="cart-count">0</b></button>
      </div>
    </header>

    <main id="top">
      <section class="hero" id="furniture">
        <div class="hero-content">
          <h1>Make Your Interior More <span>Minimalistic & Modern</span></h1>
          <p class="hero-copy">Turn your room with Agrifurn into a lot more minimalist<br>and modern with ease and speed.</p>
          <form class="search" id="search-form">
            <label class="sr-only" for="search-input">Search furniture</label>
            <input id="search-input" type="search" placeholder="Search furniture">
            <button type="submit" aria-label="Search">🔍</button>
          </form>
        </div>
      </section>

      <section class="why" id="about">
        <h2>Why<br>Choosing Us</h2>
        <div class="why-grid">
          <article>
            <h3>Luxury facilities</h3>
            <p>The advantage of hiring a workspace with us is that it gives you comfortable service.</p>
            <a href="#contact">More info <span>→</span></a>
          </article>
          <article>
            <h3>Affordable Price</h3>
            <p>You can get a workspace of the highest quality at an affordable price.</p>
            <a href="#contact">More info <span>→</span></a>
          </article>
          <article>
            <h3>Many Choices</h3>
            <p>We provide many unique furniture choices for you to choose from.</p>
            <a href="#shop">More info <span>→</span></a>
          </article>
        </div>
      </section>

      <section class="products" id="shop">
        <h2>Best Selling Product</h2>
        <div class="filters" id="filters" role="tablist" aria-label="Furniture categories">
          <button class="filter active" type="button" data-category="all" role="tab" aria-selected="true">All</button>
          <button class="filter" type="button" data-category="chairs" role="tab" aria-selected="false">Chair</button>
          <button class="filter" type="button" data-category="sofas" role="tab" aria-selected="false">Sofa</button>
          <button class="filter" type="button" data-category="lamps" role="tab" aria-selected="false">Lamp</button>
        </div>
        <div class="product-grid" id="product-grid"></div>
        <a class="view-all" href="#shop">View All <span>→</span></a>
      </section>

      <section class="brand-story" id="experience" aria-label="About Agrifurn">
        <div class="story-row experience-row">
          <div class="story-image experience-image">
            <img src="/image/Rectangle 1446.png" alt="Modern sofa in a warm living room">
          </div>
          <div class="story-copy">
            <p class="eyebrow">Experiences</p>
            <h2>We Provide You The<br>Best Experience</h2>
            <p>You don't have to worry about the result because our interiors are made by professionals with an elegant, luxurious style and premium materials.</p>
            <a href="#contact">More info <span>→</span></a>
          </div>
        </div>

        <div class="story-row materials-row">
          <div class="story-copy">
            <p class="eyebrow">Materials</p>
            <h2>Very Serious<br>Materials For Making<br>Furniture</h2>
            <p>We take furniture design seriously, using carefully selected materials to create lasting pieces at an affordable price.</p>
            <a href="#shop">More info <span>→</span></a>
          </div>
          <div class="material-collage" aria-label="Furniture materials and styles">
            <img class="material-small material-top" src="/image/Rectangle 1450.png" alt="Blue armchair">
            <img class="material-small material-middle" src="/image/3c8ea705dfc44b8035ebd10cd5adaafc9278179e.jpg" alt="Living room chair">
            <img class="material-large" src="/image/Rectangle 1446 (1).png" alt="Dining room furniture">
          </div>
        </div>

        <div class="testimonials">
          <p class="eyebrow">Testimonials</p>
          <h2>Our Client Reviews</h2>
          <div class="review-grid">
            <article class="review-card review-one">
              <div class="review-content">
                <div class="avatar">B</div>
                <h3>Monnan Mia</h3>
                <p>“The furniture looks luxurious, is very comfortable, and has such a great modern design.”</p>
                <span class="review-stars" aria-label="5 out of 5 stars">★★★★★</span>
              </div>
            </article>
            <article class="review-card review-two">
              <div class="review-content">
                <div class="avatar">I</div>
                <h3>Jobbar Ali</h3>
                <p>“The quality is very good and the service made choosing pieces for our home easy.”</p>
                <span class="review-stars" aria-label="5 out of 5 stars">★★★★★</span>
              </div>
            </article>
            <article class="review-card review-three">
              <div class="review-content">
                <div class="avatar">M</div>
                <h3>Hosoinna</h3>
                <p>“Elegant furniture, premium materials, and a beautiful atmosphere for every room.”</p>
                <span class="review-stars" aria-label="5 out of 5 stars">★★★★★</span>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>

    <footer id="contact">
      <div class="footer-main">
        <div class="footer-brand">
        
          <p>The advantage of hiring with us is that it gives you comfortable service for all your furniture needs.</p>
        </div>
        <div class="footer-column">
          <h3>Services</h3>
          <ul><li>Furniture delivery</li><li>Interior advice</li><li>Customer support</li></ul>
        </div>
        <div class="footer-column">
          <h3>Furniture</h3>
          <ul><li>Beds</li><li>Sofas</li><li>Lamps</li></ul>
        </div>
        <div class="footer-column">
          <h3>Follow Us</h3>
          <ul><li>Facebook</li><li>Instagram</li></ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>Copyright 2024 Agrifurn</p>
        
      </div>
    </footer>

    <script src="script.js"></script>
  `;

export default function HomePage() {
  useEffect(() => {
    const products = [
      { name: "Normal chair", category: "chairs", type: "Chair", price: "3920tk", image: "/image/chair 1.png" },
      { name: "Comfortable chair", category: "chairs", type: "Chair", price: "20000tk", image: "/image/chair 2.png" },
      { name: "premium sofa", category: "sofas", type: "Sofa", price: "12500tk", image: "/image/sofa 1.png" },
      { name: "Single sofa", category: "sofas", type: "Sofa", price: "51900tk", image: "/image/soafa.png" },
      { name: "Group sofa", category: "sofas", type: "Sofa", price: "92100tk", image: "/image/Houston-111.webp" },
      { name: " Elegant sofa", category: "sofas", type: "Sofa", price: "12500tk", image: "/image/images.jpg" },
      { name: "Eggri lamp", category: "lamps", type: "Lamp", price: "12900tk", image: "/image/unsplash_h2_3dL9yLpU.png" },
      { name: "Modern lamp", category: "lamps", type: "Lamp", price: "1100tk", image: "/image/download.jpg" }
    ];
    const productGrid = document.querySelector("#product-grid");
    const filterList = document.querySelector("#filters");
    const cartCount = document.querySelector("#cart-count");
    const searchForm = document.querySelector("#search-form");
    const searchInput = document.querySelector("#search-input");
    let cart = 0;
    let activeCategory = "all";

    function renderProducts() {
      const query = searchInput.value.trim().toLowerCase();
      const visibleProducts = query
        ? products.filter((product) => product.name.toLowerCase().includes(query))
        : products.filter((product) => activeCategory === "all" || product.category === activeCategory);
      productGrid.innerHTML = "";
      if (visibleProducts.length > 0) {
        for (const product of visibleProducts) {
          productGrid.innerHTML += `
            <article class="product-card">
              <div class="product-image"><img src="${product.image}" alt="${product.name}"></div>
              <div class="product-info">
                <p class="product-category">${product.type}</p>
                <h3 class="product-name">${product.name}</h3>
                <h1>*****</h1>
                <div class="product-bottom">
                  <p class="price">${product.price}</p>
                  <button class="add" type="button">+</button>
                </div>
              </div>
            </article>`;
        }
      } else {
        productGrid.innerHTML = "<h2>No products found.</h2>";
      }
    }
    renderProducts();

  const onFilterClick = (event) => {
  const selectedFilter = event.target.closest(".filter");

  if (!selectedFilter) return;

  const filters = filterList.querySelectorAll(".filter");

  filters.forEach((filter) => {
    filter.classList.remove("active");
    filter.setAttribute("aria-selected", "false");
  });

  selectedFilter.classList.add("active");

  selectedFilter.setAttribute("aria-selected", "true");

  activeCategory = selectedFilter.dataset.category;

  renderProducts();
};
    const onProductClick = (event) => {
      const addButton = event.target.closest(".add");
      if (!addButton) return;
      if (addButton.textContent === "+") {
        cart++;
        addButton.textContent = "✓";
      } else {
        cart--;
        addButton.textContent = "+";
      }
      cartCount.textContent = cart;
    };
  


    const onSearch = () => renderProducts();
    const onSubmit = (event) => {
      event.preventDefault();
      renderProducts();
      document.querySelector("#shop")?.scrollIntoView({ behavior: "smooth" });
    };
    filterList.addEventListener("click", onFilterClick);
    productGrid.addEventListener("click", onProductClick);
    searchInput.addEventListener("input", onSearch);
    searchForm.addEventListener("submit", onSubmit);
    return () => {
      filterList.removeEventListener("click", onFilterClick);
      productGrid.removeEventListener("click", onProductClick);
      searchInput.removeEventListener("input", onSearch);
      searchForm.removeEventListener("submit", onSubmit);
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: home }} />;
}
