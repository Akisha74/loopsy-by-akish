(async function () {
  const site = await includePartials();
  const [productsData, categories] = await Promise.all([
    fetchJSON("/content/products.json"),
    fetchJSON("/content/categories.json"),
  ]);
  const products = productsData.items || [];

  let activeCat = "all";

  const strip = document.getElementById("category-strip");
  const chips = [{ id: "all", name: "Все", status: "available" }, ...categories];
  strip.innerHTML = chips
    .map(
      (c) =>
        `<button class="chip ${c.id === "all" ? "active" : ""}" data-cat="${c.id}">${c.name}${
          c.status === "coming_soon" ? " <span style=\"opacity:.6\">· скоро</span>" : ""
        }</button>`
    )
    .join("");

  function productCard(p, index) {
    return `
    <div class="product-card" data-open="${index}">
      <div class="product-thumb">${productThumbHTML(p, categories)}</div>
      <div class="product-body">
        <h3>${p.name}</h3>
        <p class="product-desc">${p.short_description}</p>
        <div class="product-meta">
          <span class="price">${p.price_note ? p.price_note + " " : ""}${money(p.price)}</span>
          <span class="btn btn-sage btn-sm">Подробнее</span>
        </div>
      </div>
    </div>`;
  }

  function comingSoonCard(c) {
    return `
    <div class="category-soon-card">
      <span class="badge">Скоро в каталоге</span>
      <h3>${c.name}</h3>
      <p>${c.description}</p>
    </div>`;
  }

  function render() {
    const grid = document.getElementById("catalog-grid");
    const emptyNote = document.getElementById("empty-note");

    let cards = [];
    if (activeCat === "all") {
      cards = products.map((p, i) => productCard(p, i));
      const soon = categories.filter((c) => c.status === "coming_soon").map(comingSoonCard);
      cards = cards.concat(soon);
    } else {
      const cat = categories.find((c) => c.id === activeCat);
      if (cat && cat.status === "coming_soon") {
        cards = [comingSoonCard(cat)];
      } else {
        products.forEach((p, i) => {
          if (p.category === activeCat) cards.push(productCard(p, i));
        });
      }
    }

    grid.innerHTML = cards.join("");
    emptyNote.style.display = cards.length ? "none" : "block";

    grid.querySelectorAll("[data-open]").forEach((el) => {
      el.addEventListener("click", () => openModal(Number(el.getAttribute("data-open"))));
    });
  }

  strip.querySelectorAll(".chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      strip.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      activeCat = chip.getAttribute("data-cat");
      render();
    });
  });

  const overlay = document.getElementById("modal-overlay");
  const inner = document.getElementById("modal-inner");

  function openModal(index) {
    const p = products[index];
    if (!p) return;
    const media =
      p.images && p.images.length && p.images[0]
        ? `<img src="${p.images[0]}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;border-radius:20px 20px 0 0;">`
        : categoryIcon(p.category, categories);
    inner.innerHTML = `
      <div class="modal-media">${media}</div>
      <div class="modal-content">
        <h2>${p.name}</h2>
        <p style="color:var(--brown-soft)">${p.description}</p>
        ${p.options ? `<div class="options"><strong>Что можно выбрать:</strong> ${p.options}</div>` : ""}
        <div class="price" style="font-size:1.4rem;margin:14px 0;">${p.price_note ? p.price_note + " " : ""}${money(p.price)}</div>
        <a class="btn btn-primary btn-block" target="_blank" rel="noopener" href="${waLink(
          site.contacts.whatsapp,
          `Здравствуйте! Хочу заказать «${p.name}»`
        )}">Заказать в WhatsApp</a>
      </div>`;
    overlay.classList.add("open");
  }

  function closeModal() {
    overlay.classList.remove("open");
  }

  document.getElementById("modal-close").addEventListener("click", closeModal);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });

  render();
})();
