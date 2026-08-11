(async function () {
  const site = await includePartials();

  document.getElementById("hero-title").textContent = site.hero_title;
  document.getElementById("hero-subtitle").textContent = site.hero_subtitle;
  document.getElementById("about-short").textContent = site.about_short;

  const [productsData, categories, reviewsData] = await Promise.all([
    fetchJSON("/content/products.json"),
    fetchJSON("/content/categories.json"),
    fetchJSON("/content/reviews.json"),
  ]);
  const products = productsData.items || [];
  const reviews = reviewsData.items || [];

  const featured = products.filter((p) => p.featured).slice(0, 3);
  const grid = document.getElementById("featured-grid");
  grid.innerHTML = featured
    .map(
      (p) => `
    <a class="product-card" href="/catalog.html">
      <div class="product-thumb">${productThumbHTML(p, categories)}</div>
      <div class="product-body">
        <h3>${p.name}</h3>
        <p class="product-desc">${p.short_description}</p>
        <div class="product-meta">
          <span class="price">${p.price_note ? p.price_note + " " : ""}${money(p.price)}</span>
        </div>
      </div>
    </a>`
    )
    .join("");

  const reviewGrid = document.getElementById("review-preview");
  reviewGrid.innerHTML = reviews
    .slice(0, 2)
    .map(
      (r) => `
    <div class="review-card">
      <div class="stars">${"★".repeat(r.rating)}${"☆".repeat(5 - r.rating)}</div>
      <p>${r.text}</p>
      <div class="review-author">${r.author}</div>
      <div class="review-pet">Питомец: ${r.pet}</div>
    </div>`
    )
    .join("");
})();
